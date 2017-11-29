import { observable, action, toJS} from 'mobx';
import commonStore from './commonStore';
import userStore from './userStore';
import axios from 'axios';

/**
 * @observable 用于观察类的属性值（如AuthStore类中的inProgress等值）
 * @action 是唯一用于改变state的方法
 * 注意了，这边引入的mobx
 */

class AuthStore {
    @observable inProgress = false; //判断是否在验证账号中，是，则禁用登陆按钮

    @observable errors = undefined; //判断是否登录失败，失败内容

    @observable values = {          //登录时需要输入的内容
        username: '',
        password: '',
    };

    @observable repeatpass = '';    //注册时需要重复密码

    @observable tips = '';          //登录验证提示语

    @action setUsername(username){
        this.values.username = username;
    }

    @action setPassword(password){
        this.values.password = password;
    }

    @action setRepeatpass(repeatpass){
        this.repeatpass = repeatpass;
    }

    @action reset(){                //重置输入框操作
        this.values.username = '';
        this.values.password = '';

        this.repeatpass = '';
    }

    @action changeInProgress(flag){  
        this.inProgress = flag
    }

    @action changeTips(value){
        this.tips = value;
    }

    @action changeTwoStaus(){       //用于取消登录按钮禁用及隐藏登录提示弹窗
        setTimeout(()=>{
            this.changeInProgress(false);
            this.changeTips('');
        }, 1500)
    }

    // 登录
    @action login(){
        this.changeInProgress(true);
        this.errors = undefined;

        let name = this.values.username,
            pswd = this.values.password;

        return axios.post('/api/users/signin',{
            name: name,
            pswd: pswd,
        })
        .then(res=>{
            console.log(res);
            if(res.data.data === 1){
                this.changeTips('登录成功！');
                userStore.pullUser(toJS(this.values)) //通过toJS方法将对象转换为json
                // 另一种方法，利用解构赋值
                // userStore.pullUser({ user:{ name, pswd } })
                commonStore.changeStatus(true);  //表示登录成功
                this.changeTwoStaus();
            }else if(res.data.data === 2){
                this.changeTips('用户名或密码错误');
                this.changeTwoStaus();
            }else{
                this.changeTips('用户名不存在');
                this.changeTwoStaus();
            }
            return res;
        })
        .catch(err => console.log(err))
    }

    // 注册
    @action register(){
        this.changeInProgress(true)

        console.log("开始帮你创建...")

        return axios.post('/api/users/signup',{ 
            name: this.values.username,
            pswd: this.values.password,
            repeatpass: this.repeatpass
        })
        .then(res => {
            // console.log(res)
            if(res.data.data===1){
                this.changeTips('用户已存在');
                this.changeTwoStaus();
            }else if(res.data.data===2){
                this.changeTips('密码不一致！');
                this.changeTwoStaus();
            }else if(res.data.data===3){
                this.changeTips('注册成功！');
                userStore.pullUser(this.values) //通过toJS方法将对象转换为json
                this.changeTwoStaus();
            }
        })
        .catch(err => console.log(err))
    }

    // 登出
    @action logout(token){
        return axios({
            method: 'GET',
            url: '/api/users/signout',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization':'Bearer '+ token,
            }
        })
        .then(res => {
            // console.log(res)
            userStore.pullUser("")
            commonStore.changeStatus(false);
        })
        .catch(err => console.log(err))
    }
    
    @action show(token){
        return axios({
            method: 'GET',
            url: '/api/users',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization':'Bearer '+ token,
            }
        }).then(res => {
            console.log(res)
            this.setUsername(res.data[0].name)
            userStore.pullUser(toJS(this.values))
            return res;
        }).catch(err => console.log(err))
    }
}

export default new AuthStore();