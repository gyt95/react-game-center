import React from 'react';
// import { inject, observer } from 'mobx-react';

import { Link } from 'react-router-dom';
import './profile.scss';

const Content = ({hoby, info}) => (
    <div>
        <div className="profile-box">
            <div className="avatar-area">
                <Link to="/editor/info">
                    <button>编辑资料</button>
                </Link>
            </div>
            <div className="main">
                <div className="my-identity">
                    {
                        info===null
                        ?
                        <div className="name"></div>
                        :
                        <div className="name">
                            <p>{info.name}</p>
                            {
                                info.birthplace===null
                                ?<p>还没填写城市</p>
                                :<p>{info.birthplace}</p>
                            }
                        </div>
                    }
                </div>
                <div className="my-info">
                    <div id="sign" className="info-box">
                        <Link to="/editor/signature">
                            <div className="info-layout">
                                <span>个性签名</span>
                                {
                                    info===null||info.signature===null
                                    ?<span>什么都没写</span>
                                    :<span className="signature">{info.signature}</span>
                                }
                                <span>></span>
                            </div>
                        </Link>
                    </div>

                    <div id="hoby" className="info-box hoby">
                        <p>兴趣爱好</p>
                        <ul>
                            {
                                hoby.map((data,index)=>
                                    <li key={index} className="info-layout">
                                        <span>A</span>
                                        <Link to={`/editor/hoby/${hoby[index].type}`}>
                                            <span>{data.title}</span>
                                        </Link>
                                        <span>></span>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                
                <div className="my-footer">
                    {
                        info===null
                        ?<span>2017-11-17注册</span>
                        :<span>{info.create_at}注册</span>
                    }
                    
                </div>
            </div>
        </div>
    </div>
)

export default Content;