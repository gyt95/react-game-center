import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
import './billboard.scss';

import { observer, inject } from 'mobx-react';

import Header from '../Header/header';
import Footer from '../Footer/footer';

import hjqy from '../../images/index_hjqy.png';

const styles = {
  slideContainer: {
    height: 750,
    paddingBottom: 50,
    WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
  },
  slide: {
    padding: .8+'rem',
    minHeight: 100
  }
};

@inject('billboardStore')
@observer
class Billboard extends Component {
  constructor(props){
    super(props);
    this.state={ 
      index: 0,
      newBoardList: null,
      downBoardList: null,
      singleBoardList: null,
      hotBoardList: null
    }
  }

  componentDidMount(){
    this.props.billboardStore.loadNewBoardData().then(data=>{
      this.setState({
        newBoardList:data
      })
    })
    this.props.billboardStore.loadDownBoardData().then(data=>{
      this.setState({
        downBoardList:data
      })
    })
  }

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
    let newBoardList,downBoardList;
    if(this.state.newBoardList!=null){
      newBoardList = this.state.newBoardList.subjects.map(data=>{
          return(
              <li key={data.id}>
                <div className="item-pic">
                  <img src={hjqy} alt=""/>
                </div>
                <div className="item-detail">
                  <p className="item-name">终结者2</p>
                  <p className="item-type">{data.type}</p>
                  <span className="item-total">
                    已有
                    <span>{data.players}</span>
                    人预约
                  </span>
                </div>
                <div className="item-btn">
                  <a href="">下载</a>
                </div>
              </li>
          )
      })
    }
    if(this.state.downBoardList!=null){
      downBoardList = this.state.downBoardList.subjects.map(data=>{
          return(
              <li key={data.id}>
                <div className="item-pic">
                  <img src={hjqy} alt=""/>
                </div>
                <div className="item-detail">
                  <p className="item-name">终结者2</p>
                  <p className="item-type">{data.type} | {data.size}</p>
                  <span className="item-text">2017年经典手游重磅巨制！</span>
                </div>
                <div className="item-btn">
                  <a href="">下载</a>
                </div>
              </li>
          )
      })
    }
    return (
        <div className="billboard-box">
            <Header/>
            <Tabs value={index} fullWidth onChange={this.handleChange}>
                <Tab label="新游期待榜" style={{"height":"38px"}}/>
                <Tab label="下载榜" style={{"height":"38px"}}/>
                <Tab label="单机榜" style={{"height":"38px"}} />
                <Tab label="本周热榜" style={{"height":"38px"}} />
            </Tabs>
            <SwipeableViews index={index} containerStyle={styles.slideContainer} onChangeIndex={this.handleChangeIndex}>
                <div style={Object.assign({}, styles.slide, styles.slide1)}>
                    <div className="board-title">
                      <div className="title-image">
                        <img src={hjqy} alt=""/>
                      </div>
                      <div className="title-text">
                        <p>新游期待榜</p>
                        <span>根据玩家关注度排行</span>
                      </div>
                    </div>
                    <div className="board-list">
                      <ul>
                        {newBoardList}
                      </ul>
                    </div>
                    <div>111</div>
                </div>

                <div style={Object.assign({}, styles.slide, styles.slide2)}>
                  <div className="board-title">
                    <div className="title-image">
                      <img src={hjqy} alt=""/>
                    </div>
                    <div className="title-text">
                      <p>下载榜</p>
                      <span>根据玩家口碑排行</span>
                    </div>
                  </div>
                  <div className="board-list">
                    <ul>
                      {downBoardList}
                    </ul>
                  </div>

                </div>


                <div style={Object.assign({}, styles.slide, styles.slide3)}>

                  <div className="board-title">
                    <div className="title-image">
                      <img src={hjqy} alt=""/>
                    </div>
                    <div className="title-text">
                      <p>单机榜</p>
                      <span>精选时下热门单机</span>
                    </div>
                  </div>
                  <div className="board-list">
                    <ul>
                      {newBoardList}
                    </ul>
                  </div>

                </div>

                <div style={Object.assign({}, styles.slide, styles.slide4)}>

                  <div className="board-title">
                    <div className="title-image">
                      <img src={hjqy} alt=""/>
                    </div>
                    <div className="title-text">
                      <p>本周热搜榜</p>
                      <span>飙升最快的优质游戏</span>
                    </div>
                  </div>
                  <div className="board-list">
                    <ul>
                      {newBoardList}
                    </ul>
                  </div>

                </div>
            </SwipeableViews>

            <Footer />
        </div>
    );
  }
}

export default Billboard;