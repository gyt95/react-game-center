import React,{ Component } from 'react';
import { inject, observer }  from 'mobx-react';
import { Link } from 'react-router-dom';

import './register.scss';
import Tips from '../Tips/tips';

@inject('authStore','userStore')
@observer


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    componentWillMount(){
        document.title = '注册'
    }
    componentWillUnmount(){
        this.props.authStore.reset();
    }
    handleUsernameChange = e => {
        this.props.authStore.setUsername(e.target.value.trim());
    }
    handlePasswordChange = e => {
        this.props.authStore.setPassword(e.target.value.trim());
    }
    handleRepeatpassChange = e => {
        this.props.authStore.setRepeatpass(e.target.value.trim());
    }
    handleSubmitForm = (e) => {
        e.preventDefault();//避免事件冒泡，执行父元素同类型事件。（例如这里触发了click事件，父元素也有个click事件。假如没有阻止冒泡，就会被触发）
        this.props.authStore.register().then(()=>{
            if(this.props.authStore.tips==='注册成功！'){
                console.log('OK');
                this.props.authStore.reset();
                setTimeout(()=>{
                    this.props.history.replace('/login')
                },1500)
            }
        })
    };

    render(){
        const { values,repeatpass,tips,inProgress } = this.props.authStore;
        return(
            <div className="register-box">
                <div className="register-header">
                    <Link to="/">&lt;</Link>
                    <span>登录页面</span>
                </div>
                <div className="form-table">
                    <form onSubmit={this.handleSubmitForm}>
                        <div className="form-text">
                            <label htmlFor="username">用户名</label>
                            <input 
                                type="text" 
                                name="username"
                                value={values.username}
                                required
                                onChange={ this.handleUsernameChange } 
                            />
                        </div>
                        <div className="form-text">
                            <label htmlFor="password">密码</label>
                            <input 
                                type="password"
                                name="password"
                                value = { values.password }
                                required
                                onChange={ this.handlePasswordChange } 
                            />
                        </div>
                        <div className="form-text">
                            <label htmlFor="repeatpass">重复密码</label>
                            <input 
                                type="password"
                                name="repeatpass"
                                value= { repeatpass}
                                required
                                onChange={ this.handleRepeatpassChange } 
                            />
                        </div>
                        <button
                            type = "submit"
                            disabled = { inProgress }
                        >
                            注册
                        </button>
                    </form>
                </div>
                
                <Tips tips={tips}/>
            </div>
        )
    }
}

export default Register;