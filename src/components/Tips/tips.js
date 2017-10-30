import React, { Component } from 'react';

class Tips extends Component{
    render(){
        const tips = this.props.tips;
        console.log(tips)
        if(tips==='error'){
            return (
                <div className="error">
                    <span>帐号或密码错误</span>
                </div> 
            )
        }else if(tips==='success'){
            return (
                <div className="error">
                    <span>登录成功！</span>
                </div> 
            )
        }else{
            return null;
        }
    }
}

export default Tips;