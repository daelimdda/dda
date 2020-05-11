import React from 'react';
import { Link } from '@version/react-router-v3';
import './Header.css';
import { Button } from 'react-bootstrap';

const MenuItem = ({active, children, to}) => (
    <Link to={to} className="menu-item">
            {children}
    </Link>
)

const Header = () => {
    return (
        <div>   
           <div className="login">
            <Button variant="light" href="/dda/login.html">로그인</Button>
            <Button variant="light" href="/dda/signup.html">회원가입</Button>
           </div> 
           <div className="logo">
            <a href={'/dda'}>Driver School</a> 
           </div>
          

        </div>
    );
};

export default Header;