import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Card, WingBlank } from 'antd-mobile';

import PostDetails from './postDetails';

@inject('postStore', 'userStore')
@observer
class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test: false,
            postInfo: null
        }
    }
    enterOnePost(postInfo) {
        console.log(postInfo)
        this.props.postStore.saveCurrPostId(postInfo.id)
        this.setState({
            test: true,
            postInfo: postInfo
        })
    }
    goBackList() {
        this.setState({
            test: false
        })
    }
    render() {
        // 先判断有无数据，再判断是否进入某动态详情页，但是要改header
        return (
            this.props.postData === null
            ?
            <div></div>
            :
            this.state.test === false
                ?
                <div className="main-box">
                    <WingBlank size="lg">
                        {
                            this.props.postData.map(data =>
                                <Card key={data.id} onClick={this.enterOnePost.bind(this, data)}>
                                    <Card.Body>
                                        <div className="post-summary" >{data.content}</div>
                                    </Card.Body>
                                    <Card.Footer content="发表时间" extra={<div>{data.create_at}</div>} />
                                </Card>
                            )
                        }
                    </WingBlank>
                </div>
                :
                <PostDetails postInfo={this.state.postInfo} goBackList={this.goBackList.bind(this)} />
        )
    }
}

export default PostList;