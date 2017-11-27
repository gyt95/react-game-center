import { observable, action } from 'mobx';

class UserStore {
    @observable currentUser = null;

    @observable tokenInCookie = false;

    @action pullUser(values){
        this.currentUser = values;
    }

    @action check(){
        this.tokenInCookie = true;
    }
}

export default new UserStore();