import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import MapContent from './map';
class Bottomdda extends Component{
  render(){
    return(
  <Container>
    <Row>
      <Col xs={5} md={4}>
        <Image src="holder.js/171x180" rounded />
        운전면허취득과정
      </Col>

      <Col xs={5} md={8}>
      <MapContent />
      </Col>
    </Row>
  </Container>

    );}}
export default Bottomdda;