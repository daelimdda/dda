import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Bottomdda extends Component{
  render(){
    return(
  <Container>
    <Row>
      <Col xs={6} md={4}>
        <Image src="holder.js/171x180" rounded />
        운전면허취득과정
      </Col>
      
    
    
      <Col xs={6} md={4}>
        <Button variant="primary">서울</Button>{' '}
        <Button variant="secondary">경기</Button>{' '}
        <Button variant="success">대전</Button>{' '}
        <Button variant="warning">광주</Button>{' '}
        <Button variant="warning">대구</Button>{' '}
        <Button variant="warning">부산</Button>{' '}
      </Col>
      <Col xs={6} md={4}>
      <Image src="holder.js/171x180" rounded />
        지도
      </Col>
      
    </Row>
  </Container>

    );}}
export default Bottomdda;