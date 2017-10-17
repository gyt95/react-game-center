import React, { Component } from 'react';
import axios from 'axios';
import '../../mock/mockdata.js';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import banner1 from '../../images/banner1.png';
import card1 from '../../images/index_card1.png';
import card2 from '../../images/index_card2.png';
import hjqy from '../../images/index_hjqy.png';
import './home.css';

let timer = null; //定时器

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            gamesList:{
                subjects:[]
            },
            showBack: false,  //回到顶部按钮是否显示
            isTop: false  //是否回滚到顶部，手动终止回滚时，通过判断isTop来清空定时器
        }
        this.backClick = this.backClick.bind(this)
    }

    /**监听滚动条事件 */
    scrollHandler = this.handleScroll.bind(this);
    componentDidMount() {
        //理论上此时的this指向的是window，但由于已经在constructor()中通过显示绑定this，将this指向了当前组件
        //因此现在监听器中的this指向的是这个组件
        window.addEventListener('scroll', this.scrollHandler);

        axios
            .get('/data', {dataType: 'json'})
            .then(res =>{
                console.log(res.data)
                this.setState({
                    gamesList: res.data
                })
        })
        
    }
     _handleScroll(scrollTop,screenHeight) {
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
    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop;  
        let screenHeight = window.screen.height;  
        this._handleScroll(scrollTop,screenHeight);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }
    /**回到顶部 */
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
        };
        let gamesList = this.state.gamesList.subjects.map(function(data){
            return(
                <li key={data.id}>
                    <div><img src={hjqy} alt=""/></div>
                    <div className="item-detail">
                        <p className="item-name">{data.title}</p>
                        <span className="item-size">{data.type} | {data.size}</span>
                        <span className="item-text">2017年经典手游重磅巨制！</span>
                    </div>
                    <div className="item-btn"><button>下载</button></div>
                </li>
            )
        })
        return(
            <div>
                <Header/>
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
                            { gamesList }
                        </ul>
                    </div>
                    <div className="back-top" style = {style} onClick = { this.backClick }>
                        <img src={card2} alt=""/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home;