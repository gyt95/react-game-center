import React, { Component } from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class PostList extends Component {
    render() {
        return (
            <div className="main-box">
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Body>
                            <div>This is content of `Card`This is content of `Card`This is content of `Card`This is content of `Card`This is content of `Card`</div>
                        </Card.Body>
                        <Card.Footer content="发表时间" extra={<div>2017-10-21</div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Body>
                            <div>....</div>
                        </Card.Body>
                        <Card.Footer content="发表时间" extra={<div>2017-11-21</div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        )
    }
}

export default PostList;