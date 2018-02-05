import React from 'react';
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd-mobile';

const Content = ({ title, pathName, handleSubmitForm, userInfo }) => (
    <div className="edit-box">
        <div className="header-box">
            <div className="header">
                <div className="header-font back-btn">
                    <Link to="/profile">&lt;</Link>
                    <span>{title}</span>
                </div>
                <div onClick={handleSubmitForm} className="header-font save-btn">保存</div>
            </div>
        </div>
        {
            pathName === 'info'
                ?
                <div className="main">
                    <div className="edit-option">
                        <div className="edit-opt">
                            <span>头像</span>
                        </div>
                        <div className="edit-opt">
                            <img src="" alt=""/>
                            <span>></span>
                        </div>
                    </div>
                    <div className="edit-option">
                        <div className="edit-opt">
                            <span>昵称</span>
                        </div>
                        <div className="edit-opt">
                            {
                                userInfo.nickname !== null
                                    ? <span>{userInfo.nickname}</span>
                                    : <span>未设置</span>
                            }
                            <span>></span>
                        </div>
                    </div>
                    <div className="edit-option">
                        <div className="edit-opt">
                            <span>性别</span>
                        </div>
                        <div className="edit-opt">
                            {
                                userInfo.sex !== null
                                    ? <span>{userInfo.sex}</span>
                                    : <span>未设置</span>
                            }
                            <span>></span>
                        </div>
                    </div>
                    <div className="edit-option">
                        <div className="edit-opt">
                            <span>所在地</span>
                        </div>
                        <div className="edit-opt">                        
                            {
                                userInfo.birthplace !== null
                                    ? <span>{userInfo.birthplace}</span>
                                    : <span>未设置</span>
                            }
                            <span>></span>
                        </div>
                    </div>
                </div>
                :
                <div className="main">
                    <div className="edit-textarea" contentEditable="true">

                    </div>
                </div>
        }
    </div>
)

export default Content;