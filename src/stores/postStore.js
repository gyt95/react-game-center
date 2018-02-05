import { observable, action } from 'mobx'
import axios from 'axios'

class PostStore {
    @observable 

    @action addPost(){
        return axios.post('/api/posts/:user_id', {

        })
        .then(res => {
            console.log(res)
            if(res.data.data === 1){

            }else if(res.data.data === 2){

            }else {
                
            }
        })
        .catch(err=> console.log(err))
    }

    @action deletePost(){

    }


}

export default new PostStore();