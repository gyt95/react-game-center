import React from 'react';
import { inject, observer } from 'mobx-react';

import './profile.scss';

const Content = ({hoby}) => (
    <div>
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

export default Content;