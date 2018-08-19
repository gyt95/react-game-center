import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

import PostList from './postList';
import PostAdd from './postAdd';
import './posts.scss';
import { getCookie } from '../../utils/utils';

@inject('postStore', 'userStore')
@observer
class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postData: null,
            check: false
        }
    }
    componentWillMount() {
        console.log(this.props.userStore.getCurrentUser())
        const token = getCookie('token');
        this.props.postStore.getPostList(token)
            .then(res => {
                this.getPostList();
            })
            .catch(err => console.log(err));
    }
    getPostList() {  // 获取动态列表
        this.setState({
            postData: this.props.postStore.getPostData()
        })
    }
    componentDidMount() {
        console.log(this.props.postStore.postList)
    }
    addPost() {   // 发表动态
        const name = this.props.userStore.getCurrentUser().username;
        const token = getCookie('token');
        if (token) {
            this.props.postStore.addPost(token)
                .then(res => {
                    console.log(res)
                    this.props.userStore.check(true);
                    window.location.href = `/profile/${name}`
                })
                .catch(err => console.log(err))
        }
    }
    changePostStaus() {  // 判断当前是否在列表页，否，则无论是发表动态页还是动态详情页都跳回列表页
        this.props.postStore.postNavFlag === 0  
        ? this.props.postStore.changePostFlag(1)
        : this.props.postStore.changePostFlag(0)
    }
    delPost() {
        const name = this.props.userStore.getCurrentUser().username;
        const token = getCookie('token');
        if(token){
            this.props.postStore.deletePost(token)
                .then(res => {
                    console.log(res)
                    this.props.userStore.check(true);
                    window.location.href = `/profile/${name}`
                })
                .catch(err => console.log(err))
        }
    }
    handlePostContent = e => {   // 存储动态的内容
        this.props.postStore.setPostContent(e.target.value);
    }
    render() {
        const { currPostId } = this.props.postStore;
        return (
            <div className="posts-box">
                {
                    (() => {
                        if (this.props.postStore.postNavFlag === 0) {
                            return (
                                <div className="posts-header">
                                    <div className="nav">
                                        <Link to="/profile"><span>&lt;</span></Link>
                                        <span>个人动态</span>
                                    </div>
                                    <div className="nav">
                                        <span onClick={this.changePostStaus.bind(this)}>发表动态</span>
                                    </div>
                                </div>
                            )
                        } else if (this.props.postStore.postNavFlag === 1) {
                            return (
                                <div className="posts-header">
                                    <div className="nav">
                                        <span onClick={this.changePostStaus.bind(this)}>&lt;</span>
                                        <span>发表动态</span>
                                    </div>
                                    <div className="nav">
                                        <span onClick={this.addPost.bind(this)}>发送</span>
                                    </div>
                                </div>
                            )
                        } else if (this.props.postStore.postNavFlag === 2) {
                            return (
                                <div className="posts-header">
                                    <div className="nav">
                                        <span onClick={this.changePostStaus.bind(this)}>&lt;</span>
                                        <span>查看动态</span>
                                    </div>
                                    <div className="nav">
                                        <span onClick={this.delPost.bind(this)}>删除</span>
                                    </div>
                                </div>
                            )
                        }
                    })()
                }
                {

                    (() => {
                        if (this.props.postStore.postNavFlag === 0) {
                            return (<PostList postData={this.state.postData} />)
                        } else if (this.props.postStore.postNavFlag === 1) {
                            return (<PostAdd handlePostContent={this.handlePostContent.bind(this)} />)
                        } else if (this.props.postStore.postNavFlag === 2) {
                            return (
                                <div>
                                    {
                                        this.state.postData.map(data =>
                                            {
                                                if(data.id === currPostId){
                                                    return(
                                                        <div key={data.id} className="posts-content">
                                                            {data.content}
                                                        </div>
                                                    )
                                                }else{
                                                    return null
                                                }
                                            } 
                                        )
                                    }
                                </div>
                            )
                        }
                    })()
                }

            </div>
        )

    }
}

export default Posts;