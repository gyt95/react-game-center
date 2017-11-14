import React, { Component } from 'react';
import { inject, observer }  from 'mobx-react';
import { Link } from 'react-router-dom';

import './login.scss';
import Tips from '../Tips/tips'

/**
 * @observer 将组件变为一个观察者，响应状态变化
 * 注意了，这里引入的是mobx-react
 */

@inject('authStore','userStore')
@observer

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    componentWillMount(){
        document.title = '登录'
    }
    componentWillUnmount(){
        this.props.authStore.reset();
    }
    handleUsernameChange = e => {
        this.props.authStore.setUsername(e.target.value.trim());
    }
    handlePasswordChange = e =>{
        this.props.authStore.setPassword(e.target.value.trim());
    }
    handleSubmitForm = (e) => {
        e.preventDefault();//避免事件冒泡，执行父元素同类型事件。（例如这里触发了click事件，父元素也有个click事件。假如没有阻止冒泡，就会被触发）
        this.props.authStore.login().then(()=>{
            if(this.props.authStore.tips==='success'){
                setTimeout(()=>{
                    this.props.history.replace('/my')
                },1500)
            }
        })
    };

    render(){
        const { values,tips,inProgress } = this.props.authStore;
        return(
            <div className="login-box">
                <div className="login-header">
                    <Link to="/">&lt;</Link>
                </div>
                <div className="form-table">
                    <form onSubmit = { this.handleSubmitForm }>
                        <fieldset>
                            <fieldset>
                                <input 
                                    type = "text"
                                    placeholder = "Username"
                                    value = { values.username }
                                    onChange = { this.handleUsernameChange } 
                                />
                            </fieldset>

                            <fieldset>
                                <input 
                                    type = "password"
                                    placeholder = "Password"
                                    value = { values.password }
                                    onChange = { this.handlePasswordChange }    
                                />
                            </fieldset>
                            <button
                                type = "submit"
                                disabled = { inProgress }
                            >
                                Sign in
                            </button>
                        </fieldset>
                    </form>
                </div>
                <Tips tips={tips}/>
            </div>
        )
    }
}

export default Login;