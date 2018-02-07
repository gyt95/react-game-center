import React, { Component } from 'react';

class PostAdd extends Component {
    render() {
        let {handlePostContent} = this.props;
        return (
            <div className="main-box">
                <div className="edit-textarea">
                    <textarea onChange={handlePostContent.bind(this)}></textarea>
                </div>
            </div>
        )
    }
}

export default PostAdd;