import { observable, action } from 'mobx';
import axios from 'axios';
import '../mock/mockdata.js';
import commonStore from './commonStore';

class BillboardStore {
    @observable data = [
        {
            type:'new',
            list:''
        },
        {
            type:'down',
            list:''
        },
        {
            type:'single',
            list:''
        }
    ];

    @action loadBoardData(index){
        if(index===undefined){
            index = 0;
        }

        if(!this.data[index].list){
            commonStore.updateLoading();
            axios
            .get(`/billboard/${this.data[index].type}`, {dataType: 'json'})
            .then(action(res=>{
                this.data[index].list = res.data;
                commonStore.updateLoading();
                console.log(commonStore.loading)
            }))
        }
    }
}

export default new BillboardStore();
