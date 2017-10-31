import React, { Component } from 'react';
import Slider from 'react-slick';
import banner1 from '../../images/banner1.png';
import card1 from '../../images/index_card1.png';
import card2 from '../../images/index_card2.png';


class Content extends Component {
    
    render(){
        const settings = {
            arrows: false,
            infinite: true,
            // autoplay: 1000,
            speed: 500
        }
        return(
            <div className="home">
                <Slider {...settings}>
                    <img src={banner1} alt=""/>
                    <img src={banner1} alt=""/>
                    <img src={banner1} alt=""/>
                </Slider>
                
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
                        <div className="text" onChange={this.test}>
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
                        {this.props.list}
                    </ul>
                </div>
                <div className="back-top" style = {this.props.style} onClick = {this.props.backClick}>
                    <img src={card2} alt=""/>
                </div>
            </div>
        )
    }
}

export default Content;
