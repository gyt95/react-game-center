import React from 'react';
import { NavLink } from 'react-router-dom';

import './footer.scss';

const data = [
    {
        title:'首页',
        url:'',
        className:'icon-shouye',
    },
    {
        title:'分类',
        url:'category',
        className:'icon-wendashoujibanICON-',
    },
    {
        title:'榜单',
        url:'billboard',
        className:'icon-bangdanpaihangon',
    },
    {
        title:'我',
        url:'my',
        className:'icon-wo',
    }
]

const Footer = () =>(
    <div className="footer">
        <ul>
            {
                data.map((data,index)=>
                    <li key={index}>
                        <NavLink exact={index===0?true:false} activeClassName="active" to={`/${data.url}`}>
                            <i className={`iconfont ${data.className}`}></i>
                            <p>{data.title}</p>
                        </NavLink>
                    </li>
                )
            }
        </ul>
    </div>
)

export default Footer;