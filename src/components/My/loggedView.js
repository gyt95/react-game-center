import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import avatar from '../../images/my_avatar.png';
import avatar2 from '../../images/hongbao.png';

class LoggedView extends Component {
    render(){
        let loggedPath = '/login',
            img = avatar;
        if(this.props.currentUser){
            loggedPath = `/profile/${this.props.currentUser.username}`;
            img = avatar2;
        }
        return(
            <Link to={loggedPath}>
                <div className="user-info">
                    <div className="user-avatar">
                        <img src={img} alt=""/>
                    </div>
                    <div className="user-text">
                        {
                            this.props.currentUser
                            ?
                                <p>{ this.props.currentUser.username }</p>
                            :
                                <div><p>点此登录</p>
                                <span>游戏首发、最新礼包、活动信息快人一步</span></div>
                        }
                    </div>
                    <button>></button>
                </div>
            </Link>
        )
    }
}

export default LoggedView;