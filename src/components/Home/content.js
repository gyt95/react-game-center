import React, { Component } from 'react';
import Slider from 'react-slick';

import banner1 from '../../images/banner1.png';
import card2 from '../../images/index_card2.png';
import hjqy from '../../images/index_hjqy.png';

import { toJS } from 'mobx';
import { Link } from 'react-router-dom';

import index_card1 from '../../images/index_card1.png';
import index_card2 from '../../images/index_card2.png';
import NavCard from './navCard';


let data = {
    navbar:['新游','网游','每日推荐','单机','开测'],
    card:[
        {
            type: 'left',
            name: '金币中心',
            text: '赚金币换i7',
            url: index_card1
        },
        {
            type: 'right',
            name: '新游试玩',
            text: '与主策论游戏',
            url: index_card2
        }
    ]
}
class Content extends Component {
    
    render(){
        let homeData = toJS(this.props.homeData)
        const settings = {
            arrows: false,
            infinite: true,
            // autoplay: 1000,
            speed: 500
        }
        const {navbar, card} = data;
        return(
            <div className="home">
                <Slider {...settings}>
                    <img src={banner1} alt=""/>
                    <img src={banner1} alt=""/>
                    <img src={banner1} alt=""/>
                </Slider>
                
                <NavCard navbar={navbar} card={card}/>

                <div className="game-list">
                    <div className="list-title">
                        <span>本周人气游戏风向标</span>
                        <span>更多 > </span>
                    </div>
                    <ul className="list-details">
                        {
                            homeData
                            ?
                            homeData.subjects.map((data =>
                                <Link key={data.id} to={data.href}>
                                    <li>
                                        <div className="item-photo">
                                            <img src={hjqy} alt=""/>
                                        </div>
                                        <div className="item-detail">
                                            <p className="item-name">{data.title}</p>
                                            <span className="item-size">{data.type} | {data.size}</span>
                                            <span className="item-text">2017年经典手游重磅巨制！</span>
                                        </div>
                                        <div className="item-btn"><button>下载</button></div>
                                    </li>
                                </Link>
                                )
                            )
                            : <div></div>
                        }
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
