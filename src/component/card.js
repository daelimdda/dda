import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class carddda extends Component{
  render(){
  return (
    <Card style={{width:'17rem', height: '20rem', margin:'5px'}}>
  <Card.Img  src="123" />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
      {this.props.desc}
    </Card.Text>
    <Button variant="dark" href={this.props.link}>Go somewhere</Button>
  </Card.Body>
</Card>
  );
}}

export default carddda;