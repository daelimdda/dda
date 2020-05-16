import React, { Component } from 'react';
import './index2.css';
import logo from '../image/logo.png'

class Nav extends Component{
   render(){
    return (

        <div className="nav">
            <img className="logo" src={logo} alt="logo"></img>
            <ul>
                <li><a href="#">문제풀기</a></li>
                <li><a href="#">도로주행</a></li>
                <li><a href="#">시험접수</a></li>
            </ul>
           
        </div>

    );
    };
}
export default Nav;