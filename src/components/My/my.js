import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './my.scss';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import SettingView from './settingView';
import LoggedView from './loggedView';

@inject('userStore', 'commonStore')
@observer

class My extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="my-box">
                    <LoggedView currentUser={this.props.userStore.currentUser} />
                    
                    <SettingView />

                    <button className="logout-btn">退出登录</button>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default My;