import { observable, action, toJS } from 'mobx';
import axios from 'axios';
import '../mock/mockdata.js';

class BillboardStore {
    @observable newBoard;
    @observable downBoard;
    @observable singleBoard;
    @observable hotBoard;

    @action loadNewBoardData(){
        return axios
        .get('/billboard/new', {dataType: 'json'})
        .then(res=>{
            this.newBoard = res.data;
            return toJS(this.newBoard);
        })
    }

    @action loadDownBoardData(){
        return axios
        .get('/billboard/down', {dataType: 'json'})
        .then(res=>{
            this.downBoard = res.data;
            return toJS(this.downBoard);
        })
    }
}

export default new BillboardStore();
