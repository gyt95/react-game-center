import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

// import {IntervalEnhance} from '../Enhance/IntervalEnhance';

class Header extends Component{
    constructor(props) {
        super(props);
        this.locations = window.location.pathname;
    }
    render(){
        return(
            <div className="header-box">
            {
                window.location.pathname.indexOf('/profile')!=-1
               ?
                <div className="header profile">
                    <div>
                        <Link to="/" className="head-left">&lt;</Link>
                        <span className="head-left">我的主页</span>
                    </div>
                    <div>
                        <Link to="/download" className="download-btn">
                            <i className="iconfont icon-xiazai1"></i>
                        </Link>
                        <Link to="/more" className="more-btn">
                            <i className="iconfont icon-iconfontlttb"></i>
                        </Link>
                    </div>
                    
                </div>
                :
                <div className="header">
                    <Link to="/" className="head-left">Game{this.props.seconds}</Link>
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
            } 
            </div>
        )
    }
}
export default Header;

// export default IntervalEnhance(Header);