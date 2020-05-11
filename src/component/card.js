import React, { Component } from 'react';
import {Card ,CardGroup} from 'react-bootstrap';
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
    <CardGroup >
    <Card className="bg-transparent">
      <a href={this.props.link}>
        <div className="imgdiv bg-white">
        <img className="img" src={this.props.ddasrc} />
        </div>
      <Card.Body>
  <Card.Title className="text-white text-center">{this.props.title}</Card.Title>
      </Card.Body>
      </a>
    </Card>
    </CardGroup>
  );
}}

export default carddda;