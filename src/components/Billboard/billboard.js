import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';

import './billboard.scss';
import hjqy from '../../images/index_hjqy.png';

import Header from '../Common/Header/header';
import Footer from '../Common/Footer/footer';
import Loading from '../Common/Loading/loading';
import { toJS } from 'mobx';


const styles = {
  slideContainer: {
    height: 750,
    paddingBottom: 50,
    WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
  },
  slide: {
    padding: .3+'rem',
    minHeight: 100
  }
};

@inject('billboardStore','commonStore')
@observer
class Billboard extends Component {
  constructor(props){
    super(props);
    this.state = { 
      index: 0,
    }
  }
  componentWillMount(){
    document.title = '榜单'
  } 
  componentDidMount(){
    this.props.billboardStore.loadBoardData()
  }

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.props.billboardStore.loadBoardData(index)
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state,
          { loading } = this.props.commonStore,
          data = toJS(this.props.billboardStore.data);
    return (
        <div className="billboard-box">
            <Header/>
            <Tabs value={index} fullWidth onChange={this.handleChange}>
                <Tab label="新游期待榜" style={{"height":"38px"}}/>
                <Tab label="下载榜" style={{"height":"38px"}}/>
                <Tab label="单机榜" style={{"height":"38px"}} />
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
                    {
                      loading
                      ? <Loading/>
                      : <div></div>
                    }
                    <div style={{'height':'800px'}}>
                    <div className="board-list">
                      
                      <ul>
                        {
                          data[0].list
                          ? 
                          data[0].list.subjects.map(data=>{
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
                          : <div></div>
                        }
                      </ul>
                    </div>
                    </div>
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
                  {
                    loading
                    ? <Loading/>
                    : <div></div>
                  }
                  <div style={{'height':'800px'}}>
                  <div className="board-list">
                    <ul>
                      {
                        data[1].list
                        ?
                        data[1].list.subjects.map(data=>{
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
                        : <div></div>
                        
                      }
                    </ul>
                  </div>
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

                  {
                    loading
                    ? <Loading/>
                    : <div></div>
                  }
                  <div style={{'height':'800px'}}>
                  <div className="board-list">
                    <ul>
                      {
                        data[2].list
                        ?
                          data[2].list.subjects.map(data=>{
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
                        : <div></div>
                      }
                    </ul>
                  </div>
                  </div>
                </div>
            </SwipeableViews>

            <Footer />
        </div>
    );
  }
}

export default Billboard;