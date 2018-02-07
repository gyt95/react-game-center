import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { getCookie } from '../../utils/utils';

@inject('postStore', 'userStore')
@observer
class PostList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            this.props.postData === null
                ?
                <div></div>
                :
                <div className="main-box">
                    <WingBlank size="lg">
                        {
                            this.props.postData.map(data =>
                                <Link to="/" key={data.id}>
                                    <Card>
                                        <Card.Body>
                                            <div>{data.content}</div>
                                        </Card.Body>
                                        <Card.Footer content="发表时间" extra={<div>{data.create_at}</div>} />
                                    </Card>
                                </Link>
                            )
                        }
                    </WingBlank>
                </div>
        )
    }
}

export default PostList;