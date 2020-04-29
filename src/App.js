import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar';
import Carddda from './component/card';
import Bottomdda from './component/bottom';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


class App extends Component {
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
      {this.state.username}
     <Navbar />
     <Container bg="white" className="App">
      <Row>
        <Carddda title='문제풀기' desc='필기시험'/>    
        <Carddda title='도로주행 연습' desc='공터와 도로주행코스 소개'/>    
        <Carddda title='강사/회원 게시판' desc='강사모집와 회원모집' />
        <Carddda title='시험신청' desc='운전면허시험 신청'/>
      </Row>
     </Container>
     <Bottomdda bg="white"/>
    </div>
  );
}
}

export default App;
