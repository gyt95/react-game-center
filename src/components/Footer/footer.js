import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to="/">
                            <i className="iconfont icon-shouye"></i>
                            <p>首页</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/category">
                            <i className="iconfont icon-wendashoujibanICON-"></i>
                            <p>分类</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/billboard">
                            <i className="iconfont icon-bangdanpaihangon"></i>
                            <p>榜单</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/my">
                            <i className="iconfont icon-wo"></i>
                            <p>我</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer;