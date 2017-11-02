import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';

import './home.scss';
import hjqy from '../../images/index_hjqy.png';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import Loading from '../Loading/loading';
import Content from './content';

let timer = null; //定时器

@inject('userStore', 'commonStore')
@observer
class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            gamesList: null,  //首页数据列表
            showBack: false,  //回到顶部按钮是否显示
            isTop: false,    //是否回滚到顶部，手动终止回滚时，通过判断isTop来清空定时器
            loading: false,  //加载动画是否显示
        }
        this.backClick = this.backClick.bind(this)
    }

    /**监听滚动条事件 */
    scrollHandler = this.handleScroll.bind(this);
    componentDidMount() {
        //理论上此时的this指向的是window，但由于已经在constructor()中通过显示绑定this，将this指向了当前组件
        //因此现在监听器中的this指向的是这个组件
        window.addEventListener('scroll', this.scrollHandler);
        if(!toJS(this.props.commonStore.homeData)){
            this.setState({
                loading: true
            }) 
            //记住回调要用箭头函数，用ES5语法会导致内部this的指向全局，报错setState undefined
            this.props.commonStore.loadHomeData().then(data => {
                this.setState({
                    gamesList: data,
                    loading: false
                }) 
            });
        }else{
            this.setState({
                gamesList: toJS(this.props.commonStore.homeData),
                loading: false
            }) 
        }
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
        let scrollTop = event.srcElement.scrollingElement.scrollTop;  
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
        let gamesList,
            text = this.state.showBack ? 'block' : 'none',
            style = { display: text };
        if(this.state.gamesList!=null){
            gamesList = this.state.gamesList.subjects.map(data =>{
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
        }
        
        return(
            <div className="main">
                <Header/>

                {
                    this.state.loading
                    ? 
                        <Loading />
                    : 
                        <Content list = {gamesList} style = {style} onClick = {this.backClick}/> 
                }
                
                <Footer/>
            </div>
        )
    }
}

export default Home;