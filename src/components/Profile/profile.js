import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Header from '../Common/Header/header';
import Content from './content';
import './profile.scss';
import { getCookie } from '../../utils/utils';

let profileData = {
    hoby: [
        {
            icon: '',
            title: '玩过的游戏',
            type: 'game'
        },
        {
            icon: '',
            title: '看过的影视',
            type: 'movie'
        },
        {
            icon: '',
            title: '看过的书籍',
            type: 'book'
        }
    ]
}

@inject('userStore', 'commonStore', 'authStore')
@observer
class Profile extends Component {
    componentWillMount() {
        document.title = '个人资料';
        if (!this.props.userStore.tokenInCookie) {  //这一层防止每次到该组件都发送一次请求来判断缓存是否带token
            const token = getCookie('token');
            if (token) {
                this.props.authStore.show(token)
                    .then(res => {
                        console.log('请求结束')
                        console.log(res)
                        this.props.userStore.check(true);
                    })
                    .catch(err => console.log(err))
            }
        }
    }
    componentDidMount() {
        console.log(this.props.userStore.userInfo)
    }
    render() {
        const { hoby } = profileData;
        return (
            <div>
                <Header />

                <Content hoby={hoby} info={this.props.userStore.userInfo} />
            </div>
        )
    }
}

export default Profile;