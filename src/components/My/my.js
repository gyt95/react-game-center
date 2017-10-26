import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import avatar from '../../images/my_avatar.png';
import avatar2 from '../../images/hongbao.png';
import icon1 from '../../images/my_icon1.png';
import icon2 from '../../images/my_icon2.png';
import icon3 from '../../images/my_icon3.png';
import icon4 from '../../images/my_icon4.png';
import './my.scss';
import { inject, observer } from 'mobx-react';

const LoggedOutView = props =>{
    console.log(props)
    if(props.currentUser == null){
        return (
            <Link to="/login">
                <div className="user-info">
                    <div className="user-avatar"><img src={avatar} alt=""/></div>
                    <div className="user-text">
                        <p>点此登录</p>
                        <span>游戏首发、最新礼包、活动信息快人一步</span>
                    </div>
                    <button>></button>
                </div>
            </Link>
        )
    }
    return null;
    // 要 return，否则报错：
    // Warning: LoggedOutView(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.

    //invariant.js:44 Uncaught Error: LoggedOutView(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.
}


const LoggedInView = props =>{
    console.log(props)
    if(props.currentUser){
        return (
            <Link to="/">
                <div className="user-info">
                    <div className="user-avatar"><img src={avatar2} alt=""/></div>
                    <div className="user-text">
                        <p>{ props.currentUser.username}</p>
                    </div>
                    <button>></button>
                </div>
            </Link>
        )
    }
    return null;
}



@inject('userStore', 'commonStore')
@observer

class My extends Component{
    render(){
        const { currentUser } = this.props.userStore;
        console.log(currentUser)
        return(
            <div>
                <Header/>
                <div className="my-box">
                    <LoggedOutView currentUser={this.props.userStore.currentUser} />
                    <LoggedInView currentUser={this.props.userStore.currentUser} />
                    
                    <div className="basic-func">
                        <ul>
                            <li>
                                <img className="func-img" src={icon1} alt=""/>
                                <span className="title">谁看过我</span>
                                <button>></button>
                            </li>
                            <li>
                                <img className="func-img" src={icon2} alt=""/>
                                <span className="title">我的收藏</span>
                                <button>></button>
                            </li>
                            <li>
                                <img className="func-img" src={icon3} alt=""/>
                                <span className="title">等级中心</span>
                                <button>></button>
                            </li>
                        </ul>
                    </div>
                    <div className="basic-func">
                    <ul>
                        <li>
                            <img className="func-img" src={icon4} alt=""/>
                            <span className="title">设置</span>
                            <button>></button>
                        </li>
                        </ul>
                    </div>
                    <button className="logout-btn">退出登录</button>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default My;