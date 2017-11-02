import React, { Component } from 'react';

import './category.scss';

import Header from '../Header/header';
import Footer from '../Footer/footer';

let cateData = {
    nav: [
        {
            id: 1,
            name: '单机游戏',
        },
        {
            id: 2,
            name: 'H5游戏',
        },
        {
            id: 3,
            name: '其他游戏',
        }
    ],
    lists:[
        {
            id: 4,
            name: '大型网游',
            type: ['国战','即时','武侠','仙侠','魔幻','回合']
        },
        {
            id: 5,
            name: '休闲游戏',
            type: ['消除','塔防','捕鱼','跑酷','换装','模拟经营'],
        },
        {
            id: 6,
            name: '射击',
            type: ['FPS','第三人称','飞机坦克','未来科幻','反恐','休闲射击'],
        },
        {
            id: 7,
            name: '策略经营',
            type: ['战争','二战','三国','中世纪','模拟经营','真是修复过'],
        }
    ]
}

class Category extends Component{
    render(){
        let { nav, lists } = cateData;
        let navShow = nav.map((data, index)=>{
            let id = `icon${data.id}`;
            return(
                <li className="top-part" key={index}>
                    <span className={id}></span>
                    <span>{data.name}</span>
                </li>      
            )
        });
        let listShow = lists.map((data,index)=>{
            let name = `icon${data.id}`;
            let typeList = lists[index].type.map((item,index2)=>{
                return(
                    <li key={index2}>{item}</li>  
                )
            })
            return(
                <div className="down-box" key={index}>
                    <div className="title">
                        <span className={name}></span>
                        <span>{data.name}</span>
                    </div>
                    <div className="type">
                        <ul>
                            {typeList}
                        </ul>
                    </div>
                </div>
            )
        });
        return(
            <div>
                <Header/>
                <div className="category-box">
                    <div className="top-box">
                        <ul>{navShow}</ul>
                    </div>
                    {listShow}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Category;