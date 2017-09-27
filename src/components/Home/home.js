import React, { Component } from 'react';
import banner1 from '../../images/banner1.png';
import card1 from '../../images/index_card1.png';
import card2 from '../../images/index_card2.png';
import hjqy from '../../images/index_hjqy.png';
import jyqk from '../../images/index_jyqk.png';
import jzmyj from '../../images/index_jzmyj.png';
import jpjd from '../../images/index_jpjd.png';
import './home.scss';

// const sectionStyle = {
//     backgroundImage: `url(${sprite1})`,
//     width: 3.4+'rem',
//     height: 3.4+'rem',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: '0 0'
// }

class Home extends Component{
    render(){
        return(
            <div className="home">
               <img src={banner1} alt=""/>
               <div className="navbar">
                    <ul>
                        <li><p className="nav-icon1"/>新游</li>
                        <li><p className="nav-icon2"/>网游</li>
                        <li><p className="nav-icon3"/>每日推荐</li>
                        <li><p className="nav-icon4"/>单机</li>
                        <li><p className="nav-icon5"/>开测</li>
                    </ul>
               </div>
               <div className="card">
                    <div className="left-card">
                        <div className="text">
                            <p>金币中心</p>
                            <span>赚金币换i7</span>
                        </div>
                        <div className="pic">
                            <img src={card1} alt=""/>
                        </div>
                    </div>
                    <div className="right-card">
                        <div className="text">
                            <p>新游试玩</p>
                            <span>与主策论游戏</span>
                        </div>
                        <div className="pic">
                            <img src={card2} alt=""/>
                        </div>
                    </div>
               </div>
               <div className="game-list">
                    <div className="list-title">
                        <span>本周人气游戏风向标</span>
                        <span>更多 > </span>
                    </div>
                    <ul className="list-details">
                        <li>
                            <div><img src={hjqy} alt=""/></div>
                            <div className="item-detail">
                                <p className="item-name">幻剑奇缘</p>
                                <span className="item-size">模拟 | 104.9m</span>
                                <span className="item-text">2017年经典手游重磅巨制！</span>
                            </div>
                            <div className="item-btn"><button>下载</button></div>
                        </li>
                        <li>
                            <div><img src={jyqk} alt=""/></div>
                            <div className="item-detail">
                                <p className="item-name">剑雨乾坤</p>
                                <span className="item-size">角色 | 162.3m</span>
                                <span className="item-text">人气极高的角色扮演类型游戏</span>
                            </div>
                            <div className="item-btn"><button>下载</button></div>
                        </li>
                        <li>
                            <div><img src={jzmyj} alt=""/></div>
                            <div className="item-detail">
                                <p className="item-name">九转牧云记</p>
                                <span className="item-size">养成 | 133.1m</span>
                                <span className="item-text">故事性极强的养成类型游戏</span>
                            </div>
                            <div className="item-btn"><button>下载</button></div>
                        </li>
                        <li>
                            <div><img src={jpjd} alt=""/></div>
                            <div className="item-detail">
                                <p className="item-name">巨炮舰队</p>
                                <span className="item-size">策略 | 220.7m</span>
                                <span className="item-text">追求策略性、创造性的军事世界</span>
                            </div>
                            <div className="item-btn"><button>下载</button></div>
                        </li>
                    </ul>
               </div>
            </div>
        )
    }
}

export default Home;