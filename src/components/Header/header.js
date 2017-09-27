import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <span>雷神</span>
                <div className="search-input">
                    <i className="iconfont icon-sousuo"></i>
                    <input type="text"/>
                </div>
                <Link to="/download" className="download-btn">
                    <i className="iconfont icon-xiazai1"></i>
                </Link>
                <Link to="/more" className="more-btn">
                    <i className="iconfont icon-iconfontlttb"></i>
                </Link>                
            </div>
        )
    }
}

export default Header;