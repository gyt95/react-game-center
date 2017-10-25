import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import avatar from '../../images/my_avatar.png';
import icon1 from '../../images/my_icon1.png';
import icon2 from '../../images/my_icon2.png';
import icon3 from '../../images/my_icon3.png';
import icon4 from '../../images/my_icon4.png';
import './my.css';

class My extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="my-box">
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