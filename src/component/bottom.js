import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import MapContent from './map';
import './bottom.css';
import mypic from '../image/mhcd.gif'
class Bottomdda extends Component{
  render(){
    return(
  <Container className="bot">
    <Row>
      <Col xs={8} md={4}style={{ paddingLeft:150 , paddingRight: 0 }}>
      
        <Image src={mypic} alt="운전면허취득과정" />
      
      </Col>
      <Col xs={5} md={7}>
      <MapContent />
      </Col>
    </Row>
  </Container>

    );}}
export default Bottomdda;