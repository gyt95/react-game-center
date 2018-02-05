import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

import PostList from './postList';
import PostAdd from './postAdd';
import './posts.scss';

@inject('postStore')
@observer
class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAddPost: false
        }
    }
    componentDidMount() {

    }
    addPost(){

    }
    changePostStaus() {
        this.setState({
            isAddPost: !this.state.isAddPost
        })
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
                    this.state.addPost
                        ? <PostAdd />
                        : <PostList />
                }

            </div>
        )

    }
}

export default Posts;