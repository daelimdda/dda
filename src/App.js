import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar';
import Carddda from './component/card';
import Bottomdda from './component/bottom';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


class App extends Component {
  render(){
  return (
    <div>
     <Navbar />
     <Container className="App">
      <Row>

        <Carddda title='문제풀기' desc='필기시험'/>    
        <Carddda title='도로주행 연습' desc='공터와 도로주행 코스 소개'/>    
        <Carddda title='강사/회원 게시판' />
        <Carddda title='시험신청'/>
      
      </Row>
     </Container>
     <Bottomdda />
    </div>
  );
}
}

export default App;
