import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from '@version/react-router-v3';
import './Header.css';
class carddda extends Component{

 MenuItem = ({active, children, to}) => (
    <Link to={to} className="btn1">
            {children}
    </Link>
)

  render(){
  return (
    <Card style={{width:'17rem', height: '20rem', margin:'5px'}}>
  <Card.Img  src="123" />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
      {this.props.desc}
    </Card.Text>
    <this.MenuItem to={this.props.link}>바로가기</this.MenuItem>
    
  </Card.Body>
</Card>
  );
}}

export default carddda;