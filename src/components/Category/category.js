import React, { Component } from 'react';

class Category extends Component{
    render(){
        return(
            <div>
                <div className="category-box">
                    <ul>
                        <li className="top-part">
                            <img src="" alt=""/>
                            <span>单机游戏</span>
                        </li>
                        <li className="top-part">
                            <img src="" alt=""/>
                            <span>H5游戏</span>
                        </li>
                        <li className="top-part">
                            <img src="" alt=""/>
                            <span>其他游戏</span>
                        </li>
                    </ul>
                </div>
                <div className="category-box">
                    <div className="relax-game-title">
                        <img src="" alt=""/>
                        <span>休闲游戏</span>
                    </div>
                    <div className="relax-type">
                        
                    </div>
                </div>
                <div className="category-box">
                    <div className="shot-game-title">
                        <img src="" alt=""/>
                        <span>射击</span>
                    </div>
                    <div className="shot-type">
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Category;