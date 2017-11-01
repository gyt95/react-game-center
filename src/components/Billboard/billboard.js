import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
import './billboard.scss';

import { observer, inject } from 'mobx-react';

const styles = {
  slideContainer: {
    height: 600,
    WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
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
            <Tabs value={index} fullWidth>
                <Tab label="tab n°1" />
                <Tab label="tab n°2" />
                <Tab label="tab n°3" />
            </Tabs>
            <SwipeableViews index={index} containerStyle={styles.slideContainer} onChangeIndex={this.handleChangeIndex}>
                <div style={Object.assign({}, styles.slide, styles.slide1)}>
                  slide n°1
                  <div>hahahah</div>
                  <div>hahahah</div>
                  <div>hahahah</div>
                  <div>hahahah</div>
                  <div style={{'height':'600px'}}>hahahah</div>
                  <div>111</div>
                </div>
                <div style={Object.assign({}, styles.slide, styles.slide2)}>
                    slide n°2
                    <div>hahahah</div>
                    <div>hahahah</div>
                    <div style={{'height':'500px'}}>hahahah</div>
                    <div>hahahah</div>
                    <div style={{'height':'200px'}}>.....</div>
                    <br />
                    <br />
                </div>
                <div style={Object.assign({}, styles.slide, styles.slide3)}>
                  slide n°3
                  <div>hahahah</div>
                  <div>hahahah</div>
                  <div>hahahah</div>
                  <div>hahahah</div>
                  <div>hahahah</div>
                </div>
            </SwipeableViews>
        </div>
    );
  }
}

export default Billboard;