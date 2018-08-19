import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './home.scss';

import Header from '../Common/Header/header';
import Footer from '../Common/Footer/footer';
import Loading from '../Common/Loading/loading';
import Content from './content';

let timer = null; //定时器

@inject('userStore', 'commonStore')
@observer
class Home extends Component{ //定义一个继承于react顶层Component的新组件
    constructor(props){
        super(props);    //调用super父类构造函数改变this指向
        this.state = {
            showBack: false,  //回到顶部按钮是否显示
            isTop: false,    //是否回滚到顶部，手动终止回滚时，通过判断isTop来清空定时器
            homeData: null  // 首页游戏列表数据
        }
        this.backClick = this.backClick.bind(this)
    }
    componentWillMount(){
        document.title = '首页'
        this.props.commonStore.loadHomeList()
            .then(res => {
                console.log(res)
                this.setState({
                    homeData: this.props.commonStore.getHomeData()
                })
            })
    }
    /**监听滚动条事件 */
    scrollHandler = this.handleScroll.bind(this);
    componentDidMount() {
        //理论上此时的this指向的是window，但由于已经在constructor()中通过显示绑定this，将this指向了当前组件
        //因此现在监听器中的this指向的是这个组件
        window.addEventListener('scroll', this.scrollHandler);
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
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            this.setState({
                isTop: true
            })
           
            if(osTop===0){
                clearInterval(timer);
            }
        }, 30)
    }

    render(){
        let text = this.state.showBack ? 'block' : 'none',
            style = { display: text };
        const { loading } = this.props.commonStore;
        
        return(
            <div className="main">
                <Header/>

                {
                    loading
                    ? <Loading />
                    : <Content homeData = {this.state.homeData} style = {style} backClick = {this.backClick}/> 
                }
                
                <Footer/>
            </div>
        )
    }
}

export default Home;