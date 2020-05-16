import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fw from './flowTest';
import Mb from './mainboard';
import Map from './map';
class home extends Component {

  render(){
  return (
    
  <div >
    <div class="main_bg">
    </div>
    <Fw />
    <Mb />
    <Map />

  </div>
   
  );
}
}

export default home;
