import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import './footer.scss'
class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/category">分类</Link></li>
                    <li><Link to="/billboard">榜单</Link></li>
                    <li><Link to="/find">发现</Link></li>
                    <li><Link to="/my">我</Link></li>
                </ul>
            </div>
        )
    }
}

export default Footer;