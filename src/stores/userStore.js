import { observable, action } from 'mobx';

class UserStore {
    @observable currentUser = null;

    @action pullUser(values){
        this.currentUser = values;
    }
}

// class UserStore {
//     @observable currentUser = null;

//     @action pullUser({user}){
//         this.currentUser = user;
//     }
// }

export default new UserStore();