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

    @observable values = {  //登录时需要输入的内容
        username: '',
        password: '',
    };

    @observable tips = ''; //登录验证提示语

    @action setUsername(username){
        this.values.username = username;
    }

    @action setPassword(password){
        this.values.password = password;
    }

    @action reset(){  //重置输入框操作
        this.values.username = '';
        this.values.password = '';
    }

    @action changeInProgress(flag){
        this.inProgress = flag
    }

    @action changeTips(value){
        this.tips = value
    }

    @action login(){
        this.changeInProgress(true)
        this.errors = undefined;

        let name = this.values.username;
        let pswd = this.values.password;

        let flag = 0;

        return axios.get('http://localhost:4500/users')
        .then(res=>{
            res.data.map((data,index)=>{   
                if(data.name===name){
                    if(data.pswd===pswd){
                        this.changeTips('success');
                        console.log("找到了该用户")
                        userStore.pullUser(toJS(this.values)) //通过toJS方法将对象转换为json
                        // 另一种方法，利用解构赋值
                        // userStore.pullUser({ user:{ name, pswd } })
                        commonStore.changeStatus();
                        setTimeout(()=>{
                            this.changeInProgress(false)
                            this.changeTips('')
                        }, 1500)
                    }else{
                        this.changeTips('error');
                        setTimeout(()=>{
                            this.changeInProgress(false)
                            this.changeTips('')
                        }, 1500)
                    }
                    
                }else if(data.name!==name){
                    flag++;
                }
                return null;
            })
            console.log(flag)
            if(flag === res.data.length){

                console.log("无法找到对应的账号密码，系统将自动为你创建")
                this.register(toJS(this.values));

                this.changeInProgress(false)
            }
        })
        .catch(err=>{
            alert("可能你还没有开启json-server")
        })
    }

    // 注册
    @action register(values){
        console.log(values)
        return axios.post('http://localhost:4500/users',{ 
            name: values.username,
            pswd: values.password
        }).then(()=>{
            userStore.pullUser(values) //通过toJS方法将对象转换为json
            commonStore.changeStatus();
        })
        .catch(err=>{
            alert("可能你还没有开启json-server")
        })
    }
}

export default new AuthStore();