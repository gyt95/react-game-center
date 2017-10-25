import React, { Component } from 'react';
import { inject, observer }  from 'mobx-react';

@inject('authStore')
@observer

class Login extends Component {
    componentWillUnmount(){
        this.props.authStore.reset();
    }
    handleUsernameChange = e => {
        this.props.authStore.setUsername(e.target.value);
    }
    handlePasswordChange = e =>{
        this.props.authStore.setPassword(e.target.value);
    }
    handleSubmitForm = (e) => {
        e.preventDefault();
        this.props.authStore.login()
        //   .then(() => this.props.history.replace('/'));
        console.log(this.props.history.replace('/'))
    };
    render(){
        const { values, inProgress } = this.props.authStore;
        return(
            <div>
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
        )
    }
}

export default Login;