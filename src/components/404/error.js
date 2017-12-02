import React from 'react';
import { Link } from 'react-router-dom';

import error from '../../images/404.png';
import './error.scss';

const Error = () => (
    <div className="error-box">
        <img src={error} alt=""/>
        <Link to="/">回到首页</Link>
    </div>
)

export default Error;