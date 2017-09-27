import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <ul>
                    <li className="active">
                        <Link to="/">
                            <i className="iconfont icon-shouye"></i>
                            <p>首页</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/category">
                            <i className="iconfont icon-wendashoujibanICON-"></i>
                            <p>分类</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/billboard">
                            <i className="iconfont icon-bangdanpaihangon"></i>
                            <p>榜单</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/my">
                            <i className="iconfont icon-wo"></i>
                            <p>我</p>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer;