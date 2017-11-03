import React, { Component } from 'react';
import Slider from 'react-slick';

import banner1 from '../../images/banner1.png';
import card2 from '../../images/index_card2.png';
import hjqy from '../../images/index_hjqy.png';

import { toJS } from 'mobx';

import NavCard from './navCard';


class Content extends Component {
    
    render(){
        let homeData = toJS(this.props.homeData)
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
                
                <NavCard />

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
