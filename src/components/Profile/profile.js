import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Header from '../Header/header';
import Content from './content';
import './profile.scss';

let profileData = {
    hoby:[
        {
            icon:'',
            title:'玩过的游戏'
        },
        {
            icon:'',
            title:'看过的影视'
        },
        {
            icon:'',
            title:'看过的书籍'
        }
    ]
}

@inject('userStore', 'commonStore', 'authStore')
@observer
class Profile extends Component {
    componentWillMount(){
        document.title = '个人资料';
    }
    render(){
        const { hoby } = profileData;
        return(
            <div>
                <Header/>
                 
                <Content hoby={hoby}/>
            </div>
        )
    }
}

export default Profile;