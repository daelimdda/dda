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
      <this.MenuItem to={this.props.link}>
      <a href={this.props.url}>
        <div className="imgdiv bg-white">
        <img className="img" src={this.props.ddasrc} />
        </div>
      <Card.Body>
        <Card.Title className="text-white text-center">{this.props.title}</Card.Title>
      </Card.Body>
      </a>
      </this.MenuItem>
    </Card>
    </CardGroup>
  );
}}

export default carddda;