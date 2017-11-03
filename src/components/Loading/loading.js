import React, { Component } from 'react';
import './loading.scss';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.locations = window.location.pathname;
    }
    render(){
        let style;
        if(this.locations!=='/'){
            style={top:'25%'}
        }
        return(
            <div className="loading" style={style}>
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