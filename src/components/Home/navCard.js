import React from 'react';

const NavCard = ({ navbar, card }) => (
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

export default NavCard;