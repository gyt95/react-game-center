import { observable, action, toJS} from 'mobx';
import commonStore from './commonStore';
import userStore from './userStore';

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

    @action login(){
        this.inProgress = true;
        this.errors = undefined;

        let name = this.values.username;
        let pswd = this.values.password;

        if(name === 'aaa' && pswd === 'bbb'){
            console.log(this.inProgress);
            userStore.pullUser(toJS(this.values)) //通过toJS方法将对象转换为json

            // 另一种方法，利用解构赋值
            // userStore.pullUser({ user:{ name, pswd } })

            commonStore.changeStatus();
            this.inProgress = false;
        }
        
        console.log(this.values)
    }
}

export default new AuthStore();