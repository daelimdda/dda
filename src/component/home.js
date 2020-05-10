import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carddda from './card';
import Bottomdda from './bottom';
import { Col,Row  } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import exam from '../image/exam.jpg'
import road from '../image/driving.jpg'
import board from '../image/board.jpg'
import app from '../image/application.jpg'

class home extends Component {
  state={
    username:""
  }
  componentDidMount() {
    
    fetch('http://localhost:3001/api')
        .then(res=>res.json())
        .then(data=>this.setState({username:data.username}));
  } 

  render(){
  return (
    <div className="div1">
     <Container bg="white" className="App">
      
      <Row >
        <Col md={3}>
        <Carddda title='문제풀기' desc='필기시험' ddasrc={exam} link="dda/quiz"/>    
        </Col >
        <Col md={3} >
        <Carddda title='도로주행 연습' desc='공터와 도로주행코스 소개' ddasrc={road} link="dda/road" />
        </Col>
        <Col md={3}>    
        <Carddda title='강사/회원 게시판' desc='강사모집와 회원모집' ddasrc={board} link="dda/board" />
        </Col>
        <Col md={3}>
        <Carddda title='시험신청' desc='운전면허시험 신청' ddasrc={app} url="https://www.safedriving.or.kr/"/>
        </Col>
      </Row>
      
     </Container>
     <Bottomdda bg="white"/>
    </div>
  );
}
}

export default home;
