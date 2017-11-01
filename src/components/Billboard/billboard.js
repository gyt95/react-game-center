import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
import './billboard.scss';

import { observer, inject } from 'mobx-react';

import Header from '../Header/header';
import Footer from '../Footer/footer';

const styles = {

  slideContainer: {
    height: 600,
    WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
  },
  slide: {
    padding: 15,
    minHeight: 100,
    // color: '#fff',
  },
  // slide1: {
  //   backgroundColor: '#FEA900',
  // },
  // slide2: {
  //   backgroundColor: '#B3DC4A',
  // },
  // slide3: {
  //   backgroundColor: '#6AC0FF',
  // },
  // slide4: {
  //   backgroundColor: '#6AC0FF',
  // },
};

@inject('billboardStore')
@observer
class Billboard extends Component {

  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
        <div>
            <Header/>
            <Tabs value={index} fullWidth onChange={this.handleChange}>
                <Tab label="新游期待榜" style={{"height":"38px"}}/>
                <Tab label="下载榜" style={{"height":"38px"}}/>
                <Tab label="单机榜" style={{"height":"38px"}} />
                <Tab label="本周热榜" style={{"height":"38px"}} />
            </Tabs>
            <SwipeableViews index={index} containerStyle={styles.slideContainer} onChangeIndex={this.handleChangeIndex}>
                <div style={Object.assign({}, styles.slide, styles.slide1)}>
                    <div className="title">
                      <img src="" alt=""/>
                      <div className="title-text">
                        <h3>新游期待榜</h3>
                        <span>根据玩家关注度排行</span>
                      </div>
                    </div>
                    <div style={{'height':'600px'}}>
                      <ul>
                        <li>
                          <div><img src="" alt=""/></div>
                          <div className="detail">
                            <p>终结者2</p>
                            <span>删档封测</span>
                            <span>已有<span>25.7万</span>人预约</span>
                          </div>
                        </li>
                        <li>
                          <div><img src="" alt=""/></div>
                          <div className="detail">
                            <p>终结者2</p>
                            <span>删档封测</span>
                            <span>已有<span>25.7万</span>人预约</span>
                          </div>
                        </li>
                        <li>
                          <div><img src="" alt=""/></div>
                          <div className="detail">
                            <p>终结者2</p>
                            <span>删档封测</span>
                            <span>已有<span>25.7万</span>人预约</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>111</div>
                </div>

                <div style={Object.assign({}, styles.slide, styles.slide2)}>
                  <div className="title">
                    <img src="" alt=""/>
                    <div className="title-text">
                      <h3>下载榜</h3>
                      <span>根据玩家口碑排行</span>
                    </div>
                  </div>
                  <div style={{'height':'600px'}}>
                    <ul>
                      <li>
                        <div><img src="" alt=""/></div>
                        <div className="detail">
                          <p>自由之战</p>
                          <span>角色|运营|92m</span>
                          <span>风靡全球的游戏</span>
                        </div>
                        <div className="down-btn">下载</div>
                      </li>
                      <li>
                        <div><img src="" alt=""/></div>
                        <div className="detail">
                          <p>自由之战</p>
                          <span>角色|运营|92m</span>
                          <span>风靡全球的游戏</span>
                        </div>
                        <div className="down-btn">下载</div>
                      </li>
                      <li>
                        <div><img src="" alt=""/></div>
                        <div className="detail">
                          <p>自由之战</p>
                          <span>角色|运营|92m</span>
                          <span>风靡全球的游戏</span>
                        </div>
                        <div className="down-btn">下载</div>
                      </li>
                    </ul>
                  </div>
                  <div>111</div>
                </div>


                <div style={Object.assign({}, styles.slide, styles.slide3)}>
                  <div className="title">
                    <img src="" alt=""/>
                    <div className="title-text">
                      <h3>单机榜</h3>
                      <span>精选时下热门单机</span>
                    </div>
                  </div>
                  <div style={{'height':'600px'}}>
                    <ul>
                      <li>
                        <div><img src="" alt=""/></div>
                        <div className="detail">
                          <p>自由之战</p>
                          <span>角色|运营|92m</span>
                          <span>风靡全球的游戏</span>
                        </div>
                        <div className="down-btn">下载</div>
                      </li>
                      <li>
                        <div><img src="" alt=""/></div>
                        <div className="detail">
                          <p>自由之战</p>
                          <span>角色|运营|92m</span>
                          <span>风靡全球的游戏</span>
                        </div>
                        <div className="down-btn">下载</div>
                      </li>
                      <li>
                        <div><img src="" alt=""/></div>
                        <div className="detail">
                          <p>自由之战</p>
                          <span>角色|运营|92m</span>
                          <span>风靡全球的游戏</span>
                        </div>
                        <div className="down-btn">下载</div>
                      </li>
                    </ul>
                  </div>
                  <div>111</div>
                </div>

                <div style={Object.assign({}, styles.slide, styles.slide4)}>
                  <div className="title">
                    <img src="" alt=""/>
                    <div className="title-text">
                      <h3>单机榜</h3>
                      <span>精选时下热门单机</span>
                    </div>
                  </div>
                  <div style={{'height':'600px'}}>
                    <ul>
                      <li>
                        <div><img src="" alt=""/></div>
                        <div className="detail">
                          <p>自由之战</p>
                          <span>角色|运营|92m</span>
                          <span>风靡全球的游戏</span>
                        </div>
                        <div className="down-btn">下载</div>
                      </li>
                      <li>
                        <div><img src="" alt=""/></div>
                        <div className="detail">
                          <p>自由之战</p>
                          <span>角色|运营|92m</span>
                          <span>风靡全球的游戏</span>
                        </div>
                        <div className="down-btn">下载</div>
                      </li>
                      <li>
                        <div><img src="" alt=""/></div>
                        <div className="detail">
                          <p>自由之战</p>
                          <span>角色|运营|92m</span>
                          <span>风靡全球的游戏</span>
                        </div>
                        <div className="down-btn">下载</div>
                      </li>
                    </ul>
                  </div>
                  <div>111</div>
                </div>
            </SwipeableViews>

            <Footer />
        </div>
    );
  }
}

export default Billboard;