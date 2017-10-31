import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

import {IntervalEnhance} from '../Enhance/IntervalEnhance';

class Header extends Component{
    constructor(props) {
        super(props);
        this.locations = window.location.pathname;
    }
    render(){
        return(
            <div className="header">
                <Link to="/" className="head-left">雷神{this.props.seconds}</Link>
                <Link to="/search" className="search-input">
                    <i className="iconfont icon-sousuo"></i>
                    <input type="text"/>
                </Link>
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

export default IntervalEnhance(Header);