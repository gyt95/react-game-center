import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './my.scss';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import SettingView from './settingView';
import LoggedView from './loggedView';

@inject('userStore', 'commonStore', 'authStore')
@observer

class My extends Component{
    componentWillMount(){
        document.title = '我的'
    }
    handleSignout = e =>{
        e.preventDefault();
        this.props.authStore.logout().then(()=>{
            console.log('登出成功')
        })
    }
    render(){
        const { online } = this.props.commonStore;
        return(
            <div>
                <Header/>
                <div className="my-box">
                    <LoggedView currentUser={this.props.userStore.currentUser} />
                    
                    <SettingView />
                    
                    {
                        online
                        ? <button className="logout-btn" onClick={this.handleSignout}>退出登录</button>
                        : <br/>
                    }
                    
                </div>
                <Footer/>
            </div>
        )
    }
}

export default My;