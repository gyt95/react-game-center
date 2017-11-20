import React, { Component } from 'react';
import './tips.scss';

class Tips extends Component{
    render(){
        const tips = this.props.tips;
        if(tips!==''){
            return(
                <div className="tips">
                    <span>{tips}</span>
                </div> 
            )
        }else{
            return null;
        }
    }
}

export default Tips;