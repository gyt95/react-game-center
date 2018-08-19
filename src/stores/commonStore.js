import { observable, action, toJS } from 'mobx';
import axios from 'axios';
import '../mock/mockdata.js';

class CommonStore {
    @observable user = {
        user_id: '',
        name: ''
    };

    @observable online = false; //用户状态

    @observable homeList = null; //首页数据

    @observable loading = false; //加载动画是否显示

    @action saveUserIdAndName(user_id, username) {

        this.user = {
            user_id: user_id,
            name: username
        }
        console.log(toJS(this.user))
    }

    @action changeStatus(flag) { //用户是否已登录
        this.online = flag;
    }

    @action updateLoading() {
        this.loading = !this.loading;
    }

    @action loadHomeList() {
        this.loading = true;
        return axios.get('/api/game')
            .then(res => {
                console.log(res.data.data)
                this.homeList = res.data.data;
                return res.data.data
            })
            .catch(err => console.log(err))
    }

    @action getHomeData(){
        this.loading = false;
        return toJS(this.homeList)
    }
}

export default new CommonStore();