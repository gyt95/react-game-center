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
    componentWillMount(){
        console.log(this.props.userStore.getCurrentUser())
        const token = getCookie('token');
        this.props.postStore.getPostList(token)
            .then(res => {
                this.getPostList();
            })
            .catch(err => console.log(err));
    }
    getPostList(){
        this.setState({
            postData: this.props.postStore.getPostData()
        })
        console.log('em.......')
        console.log(this.state.postData)
    }
    constructor(props) {
        super(props)
        this.state = {
            isAddPost: false,
            postData: null
        }
    }
    componentDidMount() {
        console.log(this.props.postStore.postList)
    }
    addPost() {
        const name = this.props.userStore.getCurrentUser().username;
        const token = getCookie('token');
        if (token) {
            this.props.postStore.addPost(token)
                .then(res => {
                    console.log('ok.')
                    console.log('请求结束')
                    window.location.href = `/profile/${name}`
                    console.log(res)
                    this.props.userStore.check(true);
                })
                .catch(err => console.log(err))
        }

    }
    changePostStaus() {
        this.setState({
            isAddPost: !this.state.isAddPost
        })
    }
    handlePostContent = e => {
        this.props.postStore.setPostContent(e.target.value);
    }
    render() {
        return (
            <div className="posts-box">
                <div className="posts-header">
                    {
                        this.state.isAddPost
                            ?
                            <div className="nav">
                                <span onClick={this.changePostStaus.bind(this)}>&lt;</span>
                                <span>发表动态</span>
                            </div>
                            :
                            <div className="nav">
                                <Link to="/profile"><span>&lt;</span></Link>
                                <span>个人动态</span>
                            </div>
                    }

                    <div className="nav">
                        {
                            this.state.isAddPost
                                ? <span onClick={this.addPost.bind(this)}>发送</span>
                                : <span onClick={this.changePostStaus.bind(this)}>发表动态</span>
                        }
                    </div>
                </div>

                {
                    this.state.isAddPost
                        ? <PostAdd handlePostContent={this.handlePostContent.bind(this)} />
                        : <PostList postData={this.state.postData}/>
                }

            </div>
        )

    }
}

export default Posts;