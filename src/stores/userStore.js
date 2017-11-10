import { observable, action } from 'mobx';

class UserStore {
    @observable currentUser = null;

    @action pullUser(values){
        this.currentUser = values;
    }
}

export default new UserStore();