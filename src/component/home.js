import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carddda from './card';
import Bottomdda from './bottom';
import { Col,Row  } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import exam from '../image/test.png'
import road from '../image/paths.png'
import board from '../image/notebook.png'
import app from '../image/edit-tools.png'
import MB from './mainboard';
import street from '../image/street.png'
class home extends Component {

  render(){
  return (
    
  <div className="main">
   <img className="home" src={street}/>
     <Container bg="white" className="App">
      <Row >
        <Col xs={3} md={3}>
        <Carddda title="필기 문제풀기" ddasrc={exam} link="/dda/quiz"/>    
        </Col >
        <Col xs={3} md={3}>
        <Carddda title="도로주행" ddasrc={road} link="/dda/road" />
        </Col>
        <Col xs={3} md={3}>    
        <Carddda title="게시판" ddasrc={board} link="/dda/board" />
        </Col>
        <Col xs={3} md={3}>
        <Carddda title="시험신청" ddasrc={app} url="https://www.safedriving.or.kr/"/>
        </Col>
      </Row>
     </Container>
     <MB />
     <Bottomdda />
  </div>  
  );
}
}

export default home;
