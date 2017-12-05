import { observable, action } from 'mobx';

class UserStore {
    @observable currentUser = null;

    @observable tokenInCookie = false;

    @observable userInfo = null;

    @action pullUser(values){
        this.currentUser = values;
    }

    @action check(){
        this.tokenInCookie = true;
    }

    @action getUserInfo(info){
        this.userInfo = info;
    }
}

export default new UserStore();