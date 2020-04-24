import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { Button } from 'react-bootstrap';

class carddda extends Component{
  render(){
  return (
    <Card style={{ width: '17.5rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
      {this.props.desc}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  );
}}

export default carddda;