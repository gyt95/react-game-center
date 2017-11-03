import React, {Component} from 'react';
import icon1 from '../../images/my_icon1.png';
import icon2 from '../../images/my_icon2.png';
import icon3 from '../../images/my_icon3.png';
import icon4 from '../../images/my_icon4.png';

let setting = [
    {
        id:1,
        text:'谁看过我',
        url:icon1
    },
    {
        id:2,
        text:'我的收藏',
        url:icon2
    },
    {
        id:3,
        text:'等级中心',
        url:icon3
    },
    {
        id:4,
        text:'设置',
        url:icon4
    }
]

class SettingView extends Component{
    render(){
        return(
            <div className="basic-func">
                <ul>
                {
                    setting.map( (data,index)=>
                        (
                            <li key={data.id}>
                                <img className="func-img" src={data.url} alt=""/>
                                <span className="title">{data.text}</span>
                                <button>></button>
                            </li>
                        )
                    )
                }
                </ul>
            </div>
        )
    }
}

export default SettingView;