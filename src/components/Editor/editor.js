import React, {Component} from 'react';
import Content from './content';
import './editor.scss';

class Editor extends Component{
    componentWillMount(){
        document.title = '编辑资料'
    }
    render(){
        const path = window.location.pathname.split('/');
        let title = '';
        path[path.length-1]==='signature' 
        ? title = '修改签名' 
        : title = '兴趣爱好'

        return(
            <Content title={title} />
        )
    }
}

export default Editor;