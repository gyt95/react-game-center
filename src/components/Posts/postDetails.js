import React, { Component } from 'react';
import { Card, WingBlank } from 'antd-mobile';
import { inject, observer } from 'mobx-react';

@inject('postStore')
@observer

class PostDetails extends Component {
    componentDidMount(){
        this.props.postStore.changePostFlag(2);
    }
    render() {
        const { postInfo } = this.props;
        return (
            <div className="main-box">
                <WingBlank size="lg">
                    <Card>
                        <Card.Body>
                            <div className="post-summary" dangerouslySetInnerHTML={{ __html: postInfo.content }}></div> {/*哩个先会转换对应语法*/}
                        </Card.Body>
                        <Card.Footer content="发表时间" extra={<div>{postInfo.create_at}</div>} />
                    </Card>
                </WingBlank>
            </div>
        )
    }
}
export default PostDetails;