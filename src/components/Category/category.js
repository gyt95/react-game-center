import React, { Component } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './category.scss';

let cateData = {
    net: {
        name: '大型网游',
        list: ['国战','即时','武侠','仙侠','魔幻','回合']
    },
    relax: {
        name: '休闲游戏',
        list: ['消除','塔防','捕鱼','跑酷','换装','模拟经营'],
    },
    shot: {
        name: '射击',
        list: ['FPS','第三人称','飞机坦克','未来科幻','反恐','休闲射击'],
    },
    strategy: {
        name: '策略经营',
        list: ['战争','二战','三国','中世纪','模拟经营','真是修复过'],
    }
}

class Category extends Component{
    
    render(){
        let list1 = cateData.net.list.map((data,index)=>{
            return(
                <li key={index}>{data}</li>
            )
        });
        let list2 = cateData.relax.list.map((data,index)=>{
            return(
                <li key={index}>{data}</li>
            )
        });
        let list3 = cateData.shot.list.map((data,index)=>{
            return(
                <li key={index}>{data}</li>
            )
        });
        let list4 = cateData.strategy.list.map((data,index)=>{
            return(
                <li key={index}>{data}</li>
            )
        });
        return(
            <div>
                <Header/>
                <div className="category-box">
                    <div className="top-box">
                        <ul>
                            <li className="top-part">
                                <span className="icon1"></span>
                                <span>单机游戏</span>
                            </li>
                            <li className="top-part">
                                <span className="icon2"></span>
                                <span>H5游戏</span>
                            </li>
                            <li className="top-part">
                                <span className="icon3"></span>
                                <span>其他游戏</span>
                            </li>
                        </ul>
                    </div>
                    <div className="down-box">
                        <div className="title">
                            <span className="icon4"></span>
                            <span>{ cateData.net.name }</span>
                        </div>
                        <div className="type">
                            <ul>
                                { list1 }
                            </ul>
                        </div>
                    </div>
                    <div className="down-box">
                        <div className="title">
                            <span className="icon5"></span>
                            <span>{ cateData.relax.name }</span>
                        </div>
                        <div className="type">
                            <ul>
                                { list2 }
                            </ul>
                        </div>
                    </div>
                    <div className="down-box">
                        <div className="title">
                            <span className="icon6"></span>
                            <span>{ cateData.shot.name }</span>
                        </div>
                        <div className="type">
                            <ul>
                                { list3 }
                            </ul>
                        </div>
                    </div>
                    <div className="down-box">
                        <div className="title">
                            <span className="icon7"></span>
                            <span>{ cateData.strategy.name }</span>
                        </div>
                        <div className="type">
                            <ul>
                               { list4 }
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Category;