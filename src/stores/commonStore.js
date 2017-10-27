import { observable, action, toJS } from 'mobx';
import axios from 'axios';
import '../mock/mockdata.js';
class CommonStore {
    @observable online = false; //用户状态

    @observable homeData = null; //首页数据

    @action changeStatus(){
        this.online = true; //用户已登录
    }

    @action loadHomeData(){
        return axios
        .get('/data', {dataType: 'json'})
            .then(res =>{
                console.log(res.data)
                this.homeData = res.data;
                return toJS(this.homeData);
        })
    }
}

export default new CommonStore();