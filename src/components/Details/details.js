import React,{ Component } from 'react';
import Content from './content';
import './details.scss';
import hjqy from '../../images/index_hjqy.png';


class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: `${document.body.clientWidth}px solid #fff`
        }
    }
    componentDidMount(){
        console.log(document.body.clientWidth)
    }
    render(){
        return(
            <div>
                <div className="top-box">
                    <div className="show" style={{borderRight:this.state.text}}>
                    </div>
                    <div className="images">
                        <img src={hjqy} alt=""/>
                    </div>
                    <div className="title">
                        <p>荒野行动</p>
                        <span>不删档</span>
                    </div>
                    <div className="score">
                        <p className="number">
                            4.0
                        </p>
                        <p>两星</p>
                        <p>3000点评</p>
                    </div>
                </div>

                <Content/>
            </div>
        )
    }
}

export default Details;