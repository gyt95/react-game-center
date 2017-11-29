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
        if(!this.props.userStore.tokenInCookie){  //这一层防止每次到该组件都发送一次请求来判断缓存是否带token
            const token = this.getCookie('token');
            if(token){
                this.props.authStore.show(token).then(res => {
                    console.log('请求结束')
                    console.log(res)
                    this.props.userStore.check(true);
                }).catch(err => console.log(err))
            }
        }
    }
    handleSignout = e => {
        e.preventDefault();
        const token = this.getCookie('token');
        this.props.authStore.logout(token).then(() => {
            console.log('~')
            this.clearCookie('token')
        })
    }
    getCookie(cookieName){
        let strCookie = document.cookie,
            arrCookie = strCookie.split("; ");
        for(let i = 0; i < arrCookie.length; i++){
            let arr = arrCookie[i].split("=");
            if(cookieName === arr[0]){
                return arr[1];
            }
        }
        return "";
    }
    clearCookie(cookieName) {  
        this.setCookie(cookieName, "", -1);  
    }  
    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="my-box">
                    <LoggedView currentUser={this.props.userStore.currentUser} />
                    
                    <SettingView />
                    
                    {
                        this.props.userStore.currentUser
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