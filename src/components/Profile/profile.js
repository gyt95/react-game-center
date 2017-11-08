import React, { Component } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './profile.scss';

class Profile extends Component {
    render(){
        return(
            <div>
                <Header/>
                
                <div className="profile-box">
                    <div>欢迎来到个人页面</div>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default Profile;