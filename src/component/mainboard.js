import React, { Component } from 'react';
import './mainboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carddda from './card';
import Bottomdda from './bottom';
import { Col,Row  } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


class MB extends Component {
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
     <Container className="MB">
      <Row >
        <Col xs={6} md={6}>
          <div className="name">회원</div>
          <div className="mblist">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </Col >
        <Col xs={6} md={6}>
          <div className="name">강사</div>
          <div className="mblist">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </Col>
      </Row>
      
     </Container>

    </div>
  );
}
}

export default MB;
