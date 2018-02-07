import { observable, action, toJS } from 'mobx';
import axios from 'axios';
import '../mock/mockdata.js';

class CommonStore {
    @observable user = {
        user_id: '',
        name: ''
    };

    @observable online = false; //用户状态

    @observable homeData = null; //首页数据

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

    @action loadHomeData() {
        if (!this.homeData) {
            this.loading = true;
            axios.get('/data', { dataType: 'json' })
                .then(action(res => {  //@action只能影响正在执行的函数，而异步回调的话，意味着不是“正在执行”，因此需要用action包裹，才能在里面修改state
                    this.homeData = res.data;
                    this.loading = false;
                })
            )
        }
    }
}

export default new CommonStore();