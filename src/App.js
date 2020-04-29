import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';

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
      <Header/>
      {this.props.children}
    </div>
  );
}
}

export default App;
