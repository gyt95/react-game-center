import React from 'react';

import img01 from '../../images/detail01-1.jpg';
import img02 from '../../images/detail01-2.jpg';
import img03 from '../../images/detail01-3.jpg';
import img04 from '../../images/detail01-4.jpg';

const Content = (props) => (
    <div>
        <div className="main-box">
            <div className="desc">
                <ul>
                    <li><img src={img01} alt=""/></li>
                    <li><img src={img02} alt=""/></li>
                    <li><img src={img03} alt=""/></li>
                    <li><img src={img04} alt=""/></li>
                </ul>
                <div className={props.className}>
                    游戏介绍：《荒野行动》，真正做到了容纳100人开局对战。超大地图超远视距，手机端精心设计多种操作模式，带给玩家畅快舒适的竞技体验！ 
                    <br/>
                    6400*6400超大世界，真正容纳100人开局！跋涉山峦旷野，探索城镇村郊！组队开黑，战术配合花样迭出；道具种类丰富，自由搭配，更有多种配件强力升级；针对手机端精心设计多种操作模式，提供极致竞技体验！
                    <div className="game-introduce-more" onClick={props.removeClass.bind(this)}>
                        展开
                    </div>
                </div>
            </div>
        </div>

        <div className="fixed-bottom">
            <button>下载游戏</button>
        </div>
    </div>
)

export default Content;