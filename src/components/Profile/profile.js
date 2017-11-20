import React, { Component } from 'react';
import Header from '../Header/header';
import './profile.scss';

let profileData = {
    hoby:[
        {
            icon:'',
            title:'玩过的游戏'
        },
        {
            icon:'',
            title:'看过的影视'
        },
        {
            icon:'',
            title:'看过的书籍'
        }
    ]
}

class Profile extends Component {
    componentWillMount(){
        document.title = '个人信息'
    }
    render(){
        const { hoby } = profileData;
        return(
            <div>
                <Header/>
                
                <div className="profile-box">
                    <div className="avatar-area">
                        <button>说点什么</button>
                    </div>
                    <div className="main">
                        <div className="my-identity">
                            <div className="name">
                                <p>玩家名</p>
                                <p>所在城市名</p>
                            </div>
                        </div>
                        <div className="my-info">
                            <div id="sign" className="info-box">
                                <div className="info-layout">
                                    <span>个性签名</span>
                                    <span>什么都没写</span>
                                    <span>></span>
                                </div>
                            </div>

                            <div id="hoby" className="info-box hoby">
                                <p>兴趣爱好</p>
                                <ul>
                                    {
                                        hoby.map((data,index)=>
                                            <li key={index} className="info-layout">
                                                <span>A</span>
                                                <span>{data.title}</span>
                                                <span>></span>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        
                        <div className="my-footer">
                            <span>2017-11-17注册</span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profile;