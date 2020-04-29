import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carddda from './card';
import Bottomdda from './bottom';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


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
    <div>
     <Container bg="white" className="App">
      <Row>
        <Carddda title='문제풀기' desc='필기시험' link="quiz"/>    
        <Carddda title='도로주행 연습' desc='공터와 도로주행코스 소개' link="road"/>    
        <Carddda title='강사/회원 게시판' desc='강사모집와 회원모집' link="board"/>
        <Carddda title='시험신청' desc='운전면허시험 신청' link="https://www.safedriving.or.kr/"/>
      </Row>
     </Container>
     <Bottomdda bg="white"/>
    </div>
  );
}
}

export default home;
