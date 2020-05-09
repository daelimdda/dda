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
           <div className="logo">
            <a href={'/dda'}>운면따</a> 
           </div>
           <div className="login">
            <Button variant="outline-secondary" href="/dda/login.html">로그인</Button>
            <Button variant="outline-secondary" href="/dda/signup.html">회원가입</Button>
           </div>
           <div className="menu">
            <MenuItem to={'/dda'}>홈</MenuItem>
            <MenuItem to={'/dda/quiz'}>문제풀기</MenuItem>
            <MenuItem to={'/dda/road'}>도로주행</MenuItem>
            <MenuItem to={'/dda/board'}>게시판</MenuItem>               
           </div>    
        </div>
    );
};

export default Header;