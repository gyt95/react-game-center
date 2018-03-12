import React from 'react';
import { NoticeBar, WhiteSpace, Tabs, Badge } from 'antd-mobile';

import img01 from '../../images/detail01-1.jpg';
import img02 from '../../images/detail01-2.jpg';
import img03 from '../../images/detail01-3.jpg';
import img04 from '../../images/detail01-4.jpg';
import hjqy from '../../images/index_hjqy.png';
import gnews from '../../images/game_news.png';

const tabs = [
    { title: <Badge>首页</Badge> },
    { title: <Badge>礼包</Badge> },
    { title: <Badge>攻略</Badge> },
    { title: <Badge>推荐</Badge> },
    // { title: <Badge dot>论坛</Badge> }
]

const Content = (props) => (
    <div>
        <div className="main-box">
            <div className="desc">
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ height: 'auto', backgroundColor: '#fff' }}>
                        <NoticeBar mode="link" onClick={() => alert('1')}>
                            Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
                        </NoticeBar>
                        <WhiteSpace size="lg" />
                        <ul>
                            <li><img src={img01} alt="" /></li>
                            <li><img src={img02} alt="" /></li>
                            <li><img src={img03} alt="" /></li>
                            <li><img src={img04} alt="" /></li>
                        </ul>
                        <div className={props.className}>
                            游戏介绍：《荒野行动》，真正做到了容纳100人开局对战。超大地图超远视距，手机端精心设计多种操作模式，带给玩家畅快舒适的竞技体验！
                            <br />
                            6400*6400超大世界，真正容纳100人开局！跋涉山峦旷野，探索城镇村郊！组队开黑，战术配合花样迭出；道具种类丰富，自由搭配，更有多种配件强力升级；针对手机端精心设计多种操作模式，提供极致竞技体验！

                        </div>
                        <div className="game-introduce-more" onClick={props.changeClass}>
                            {props.introText}
                        </div>
                        <WhiteSpace size="lg" />


                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of forth tab
                    </div>
                </Tabs>


                <div className="game-detail-box game-news">
                    <div className="box-title">
                        <p>游戏资讯</p>
                        <span>></span>
                    </div>
                    <div className="news-item">
                        <div>
                            <p>荒野行动M27全方位解析 最稳的xxxxxxxxxxx实测</p>
                            <span>综合 2018-02-11 13:49:00</span>
                        </div>
                        <div>
                            <img src={gnews} alt="" />
                        </div>
                    </div>
                    <div className="news-item">
                        <div>
                            <p>荒野行动更新 诸多新玩法惊喜来袭</p>
                            <span>综合 2018-02-11 13:49:00</span>
                        </div>
                        <div>
                            <img src={gnews} alt="" />
                        </div>
                    </div>
                </div>

                <div className="game-detail-box game-comments">
                    <div className="box-title">
                        <span>玩家评分<strong> 3.8 </strong>分</span>
                        <div className="box-num">
                            <span>8000</span>
                            <span>点评</span>
                            <span> ></span>
                        </div>
                    </div>
                    <div className="box-btn">
                        <a href="">发表评论</a>
                    </div>
                    <div className="comments-item">
                        <div className="c-avatar">
                            <img src={hjqy} alt="" />
                        </div>
                        <div className="c-content">
                            <div className="c-name">
                                <span>用户名字xxx</span>
                                <span>最高赞top5有这段话</span>
                            </div>
                            <div className="c-text">
                                这是评论内容。<br />说点什么?
                                <br /> Hello!!
                                <br /> Hello!!Hello!!
                                <br /> Hello!!Hello!!后面还有内容
                                <br /> what
                            </div>
                            <div className="c-bottom">
                                <span>2017-12-31</span>
                                <div>
                                    <span>点赞数3000</span>
                                    <span>评论数2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comments-item">
                        <div className="c-avatar">
                            <img src={hjqy} alt="" />
                        </div>
                        <div className="c-content">
                            <div className="c-name">
                                <span>用户名字xxx</span>
                                <span>最高赞top5有这段话</span>
                            </div>
                            <div className="c-text">这是评论内容</div>
                            <div className="c-bottom">
                                <span>2017-12-31</span>
                                <div>
                                    <span>点赞数3000</span>
                                    <span>评论数2</span>
                                </div>
                            </div>
                        </div>
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