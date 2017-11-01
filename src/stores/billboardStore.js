import { observable, action } from 'mobx';

class BillboardStore {
    @observable scroll_one;

    @action setOne(a,b){
        console.log(a)
        console.log(b)
    }
}

export default new BillboardStore();
