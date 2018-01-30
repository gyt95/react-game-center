import React, { Component } from 'react';

// 参数importComponent用于动态引入给定的组件
export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props){
            super(props);
            this.state = {
                component: null
            };
        }
        async componentDidMount(){
            const { default: componnet } = await importComponent();
            this.setState({
                component: component
            });
        }
        render(){
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }
    return AsyncComponent; // 返回这个类
}