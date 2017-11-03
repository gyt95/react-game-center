import React, {Component} from 'react';

import card1 from '../../images/index_card1.png';
import card2 from '../../images/index_card2.png';

let data = {
    navbar:['新游','网游','每日推荐','单机','开测'],
    card:[
        {
            type: 'left',
            name: '金币中心',
            text: '赚金币换i7',
            url: card1
        },
        {
            type: 'right',
            name: '新游试玩',
            text: '与主策论游戏',
            url: card2
        }
    ]
}

class NavCard extends Component{
    render(){
        let { navbar, card } = data;
        return(
            <div>
                <div className="navbar">
                    <ul>
                        {
                            navbar.map((data,index)=>
                                <li key={index}>
                                    <p className={`nav-icon${index+1}`}/>{data}
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="card">
                    {
                        card.map((data,index)=>
                            <div className={`${data.type}-card`} key={index}>
                                <div className="text">
                                    <p>{data.name}</p>
                                    <span>{data.text}</span>
                                </div>
                                <div className="pic">
                                    <img src={data.url} alt=""/>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default NavCard;