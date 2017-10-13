import React, { Component } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './category.scss';

class Category extends Component{
    
    componentWillMount(){
        // 这里的话就会报错，为什么呢？因为DOM还没渲染出来
        // console.log(this.refs.body.clientWidth)

        // 一般用于请求服务器数据
    }
    // componentDidMount(){
    //     var k = window.screen.height - 36 - 46;
    //     this.refs.body.style.height = k + 'px';
    // }
    render(){
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
                            <span>大型网游</span>
                        </div>
                        <div className="type">
                            <ul>
                                <li>国战</li>
                                <li>即时</li>
                                <li>武侠</li>
                                <li>仙侠</li>
                                <li>魔幻</li>
                                <li>回合</li>
                            </ul>
                        </div>
                    </div>
                    <div className="down-box">
                        <div className="title">
                            <span className="icon5"></span>
                            <span>休闲游戏</span>
                        </div>
                        <div className="type">
                            <ul>
                                <li>消除</li>
                                <li>塔防</li>
                                <li>捕鱼</li>
                                <li>跑酷</li>
                                <li>换装</li>
                                <li>模拟经营</li>
                            </ul>
                        </div>
                    </div>
                    <div className="down-box">
                        <div className="title">
                            <span className="icon6"></span>
                            <span>射击</span>
                        </div>
                        <div className="type">
                            <ul>
                                <li>FPS</li>
                                <li>第三人称</li>
                                <li>飞机坦克</li>
                                <li>未来科幻</li>
                                <li>反恐</li>
                                <li>休闲射击</li>
                            </ul>
                        </div>
                    </div>
                    <div className="down-box">
                        <div className="title">
                            <span className="icon7"></span>
                            <span>策略经营</span>
                        </div>
                        <div className="type">
                            <ul>
                                <li>战争</li>
                                <li>二战</li>
                                <li>三国</li>
                                <li>中世纪</li>
                                <li>模拟经营</li>
                                <li>真是修复过</li>
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