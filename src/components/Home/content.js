import React, { Component } from 'react';
import Slider from 'react-slick';

import banner1 from '../../images/banner1.png';
import card1 from '../../images/index_card1.png';
import card2 from '../../images/index_card2.png';

let data = {
    navbar:['新游','网游','每日推荐','单机','开测'],
    card:{
        left:{name:'金币中心',text:'赚金币换i7'},
        right:{name:'新游试玩',text:'与主策论游戏'}
    }
}

class Content extends Component {
    
    render(){
        const settings = {
            arrows: false,
            infinite: true,
            // autoplay: 1000,
            speed: 500
        }
        let { navbar, card: {left, right} } = data;
        let navbarList = navbar.map((data,index)=>{
            let name = `nav-icon${index+1}`;
            return(
                <li key={index}>
                    <p className={name}/>{data}
                </li>
            )
        })
        return(
            <div className="home">
                <Slider {...settings}>
                    <img src={banner1} alt=""/>
                    <img src={banner1} alt=""/>
                    <img src={banner1} alt=""/>
                </Slider>
                
                <div className="navbar">
                    <ul>
                        {navbarList}
                    </ul>
                </div>
                <div className="card">
                    <div className="left-card">
                        <div className="text">
                            <p>{left.name}</p>
                            <span>{left.text}</span>
                        </div>
                        <div className="pic">
                            <img src={card1} alt=""/>
                        </div>
                    </div>
                    <div className="right-card">
                        <div className="text">
                            <p>{right.name}</p>
                            <span>{right.text}</span>
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
