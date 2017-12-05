import React from 'react';
import { Link } from 'react-router-dom';

const Content = ({title}) => (
    <div className="edit-box">
        <div className="header-box">
            <div className="header">
                <div className="header-font back-btn">
                    <Link to="/profile">&lt;</Link>
                    <span>{title}</span>
                </div>
                <div className="header-font save-btn">保存</div>
            </div>
        </div>
        <div className="main">
            <div className="edit-textarea" contentEditable="true">

            </div>
        </div>
    </div>
)

export default Content;