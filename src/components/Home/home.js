import React, { Component } from 'react';
import banner1 from '../../images/banner1.png';
import card1 from '../../images/index_card1.png';
import card2 from '../../images/index_card2.png';
import hjqy from '../../images/index_hjqy.png';
import jyqk from '../../images/index_jyqk.png';
import jzmyj from '../../images/index_jzmyj.png';
import jpjd from '../../images/index_jpjd.png';
import './home.scss';

let timer = null; //定时器

class Home extends Component{
    // 旧版写法，es6去掉了这个hook函数，规定state在constructor中实现
    // getInitialState(){
    //     return {
    //         showBack: false
    //     }
    // }
    constructor(props){
        super(props)
        this.state = {
            showBack: false,  //回到顶部按钮是否显示
            isTop: false  //是否回滚到顶部，手动终止回滚时，通过判断isTop来清空定时器
        }
        this.backClick = this.backClick.bind(this)
    }

    /**监听滚动条事件(不懂) */
    scrollHandler = this.handleScroll.bind(this);
    componentDidMount() {
        //理论上此时的this指向的是window，但由于上面已经通过显示绑定this，将this指向了当前组件
        //因此现在监听器中的this指向的是这个组件
        window.addEventListener('scroll', this.scrollHandler);
    }
     _handleScroll(scrollTop,screenHeight) {
       
    }
    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop;  
        let screenHeight = window.screen.height;  
        // this._handleScroll(scrollTop,screenHeight);
         // console.log(scrollTop)         //滚动条距离页面的高度
         const sh = screenHeight / 2;
         if(scrollTop > sh){
             this.setState({
                 showBack: true
             })
         }else{
             this.setState({
                 showBack: false
             })
         }
         if(this.state.isTop === false){
             clearInterval(timer)
         }
         this.setState({
             isTop: false
         })
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }
    /**监听滚动条事件(不懂) */

    backClick(){  
        timer = setInterval(()=>{
            let osTop = document.body.scrollTop;
            let speed = Math.floor(-osTop/6);
            document.body.scrollTop = osTop + speed;
            this.setState({
                isTop: true
            })
           
            if(osTop===0){
                clearInterval(timer);
            }
        }, 30)
    }
    render(){
        let text = this.state.showBack ? 'block' : 'none';
        let style = {
            display: text
        }
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
                        <li>
                            <div><img src={jpjd} alt=""/></div>
                            <div className="item-detail">
                                <p className="item-name">巨炮舰队</p>
                                <span className="item-size">策略 | 220.7m</span>
                                <span className="item-text">追求策略性、创造性的军事世界</span>
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
                        <li>
                            <div><img src={jpjd} alt=""/></div>
                            <div className="item-detail">
                                <p className="item-name">巨炮舰队</p>
                                <span className="item-size">策略 | 220.7m</span>
                                <span className="item-text">追求策略性、创造性的军事世界</span>
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
                <div className="back-top" style = {style} onClick = { this.backClick }>
                    <img src={card2} alt=""/>
                </div>
            </div>
        )
    }
}

export default Home;