import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Content from './content';
import './details.scss';
import hjqy from '../../images/index_hjqy.png';

class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: `${document.body.clientWidth}px solid #fff`,
            className: 'game-introduce fold',
            introText: '展开'
        }
    }
    componentDidMount(){
        console.log(document.body.clientWidth)
    }
    changeClass = () => {
        this.state.className==='game-introduce'
        ?this.setState({ className: 'game-introduce fold', introText: '展开' })
        :this.setState({ className: 'game-introduce', introText: '收起' })
    }
    render(){
        return(
            <div className="details-box">
                <div className="top-box">
                    <div className="details-header-box">
                        <Link to="/" className="head-left">&lt;</Link>
                        <Link to="/search" className="search-input">
                            <i className="iconfont icon-sousuo"></i>
                        </Link>
                    </div>
                    
                    <div className="show" style={{borderRight:this.state.text}}>
                    </div>
                    <div className="images">
                        <img src={hjqy} alt=""/>
                    </div>
                    <div className="title">
                        <p>小游戏</p>
                        <span>不删档</span>
                    </div>
                    <div className="score">
                        <p className="number">
                            4.0
                        </p>
                        <p>两星</p>
                        <p>3000点评</p>
                    </div>
                    <div className="game-tags">
                        <span>电子竞技</span>
                        <span>策略卡牌</span>
                        <span>竞技对战</span>
                    </div>
                </div>
                
                
                <Content 
                    className={this.state.className}
                    introText={this.state.introText} 
                    changeClass={this.changeClass}
                />
            </div>
        )
    }
}

export default Details;