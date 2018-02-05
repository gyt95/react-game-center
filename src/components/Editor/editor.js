import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Content from './content';
import './editor.scss';
import { getCookie } from '../../utils/utils';


@inject('userStore', 'commonStore', 'authStore')
@observer
class Editor extends Component {
    componentWillMount() {
        document.title = '编辑资料';
        if (!this.props.userStore.tokenInCookie) {
            const token = getCookie('token');
            if (token) {
                this.props.authStore.show(token)
                    .then(res => {
                        console.log('请求结束.....')
                        console.log(res)
                        this.props.userStore.check(true);
                    })
                    .catch(err => console.log(err))
            }
        }
    }
    componentDidMount(){
        console.log(this.props.userStore.userInfo)
    }
    handleSubmitForm() {
        console.log(this.props.userStore.userInfo)
    }
    
    render() {
        const path = window.location.pathname.split('/'),
            pathName = path[path.length - 1];
        console.log(pathName)
        let title = '';
        if (pathName === 'signature')
            title = '修改签名'
        else if (pathName === 'game' || pathName === 'movie' || pathName === 'book')
            title = '兴趣爱好'
        else
            title = '编辑资料'
        return (
            <Content 
                title={title} 
                pathName={pathName}
                userInfo={this.props.userStore.userInfo}
                handleSubmitForm={() => this.handleSubmitForm()} 
                />
        )
    }
}

export default Editor;