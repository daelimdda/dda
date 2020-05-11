import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import MapContent from './map';
import './bottom.css';

class Bottomdda extends Component{
  render(){
    return(
  <Container className="bot">
    <Row>
      <Col xs={12} md={12} style={{padding:"0px 0px 0px 0px"}}>
      <MapContent />
      </Col>
    </Row>
  </Container>

    );}}
export default Bottomdda;