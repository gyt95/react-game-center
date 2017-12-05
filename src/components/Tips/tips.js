import React from 'react';
import './tips.scss';

const Tips = ({tips}) => (
        tips!==''
        ?
        <div className="tips">
            <span>{tips}</span>
        </div> 
        :
        <div></div>
)

export default Tips;