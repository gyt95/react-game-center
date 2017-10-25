import React, { Component } from 'react';
import './loading.css';

class Loading extends Component {
    render(){
        return(
            <div className="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}

export default Loading;