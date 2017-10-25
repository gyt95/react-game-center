import { observable, action} from 'mobx';

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

        if(this.values.username === 'aaa' && this.values.password === 'bbb'){
            console.log('aaaa');
            this.inProgress = false;
        }
        
    }
}

export default new AuthStore();