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
      <Col xs={5} md={3}>
        <Image src="holder.js/171x180" rounded />
        운전면허취득과정
      </Col>
      <Col xs={5} md={9}>
      <MapContent />
      </Col>
    </Row>
  </Container>

    );}}
export default Bottomdda;