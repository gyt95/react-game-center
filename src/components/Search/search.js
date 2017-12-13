import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import './search.scss';
import '../Common/Header/header.scss';

const tag = ['王者荣耀','口袋妖怪','梦幻西游','阴阳师','火影忍者','部落冲突']

class Search extends Component{
    constructor(props){
        super(props);
        this.modalShow = this.modalShow.bind(this);
        this.modalHide = this.modalHide.bind(this);
        this.historyDel = this.historyDel.bind(this);
    }
    componentWillMount(){
        document.title = '搜索游戏'
    }
    modalShow(){
        this.refs.mask.style = 'display:block;'
        this.refs.modal.style = 'display:block;'
    }
    modalHide(){
        this.refs.mask.style = 'display:none;'
        this.refs.modal.style = 'display:none;'
    }
    historyDel(){
        console.log(this.refs.history)
    }
    render(){
        return(
            <div>
                <div className="search-header-box">
                    <div className="search-header">
                        <Link to="/" className="head-left">&lt;</Link>
                        <Link to="/search" className="search-input">
                            <input type="text" placeholder="我的世界"/>
                        </Link>
                        <i className="iconfont icon-sousuo"></i>
                    </div>
                </div>
                
                <div className="search-box">
                    
                    <div className="hot-search">
                        <span>热门搜索</span>
                        <ul>
                            {
                                tag.map((data,index)=>
                                    <li key={index}>{data}</li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="history-search" ref="history">
                        <span>历史搜索</span>
                        <ul>
                            <li>王者荣耀</li>
                            <li>王者荣耀</li>
                            <li>王者荣耀</li>
                        </ul>
                    </div>
                    <div className="clean-history" onClick = { this.modalShow }>
                        清空历史记录
                    </div>
                    <div className="mask" ref="mask"></div>
                    <div className="modal" ref="modal">
                        <p>清空</p>
                        <span>是否清空历史记录？</span>
                        <div className="clean-btn">
                            <input type="submit" value="取消" onClick = { this.modalHide } />
                            <input type="submit" value="确定" onClick = { this.historyDel }/>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;