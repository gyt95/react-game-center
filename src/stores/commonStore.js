import { observable, action } from 'mobx';

class CommonStore {
    @observable online = false;

    @action changeStatus(){
        console.log(this.online)
        this.online = true;
        console.log(this.online)
    }
}

export default new CommonStore();