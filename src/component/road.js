import React, { Component } from 'react';
import './index2.css'
import Iframe from 'react-iframe';

class road extends Component {
    state={
        src:""
    }
    dobong = () => {
        this.setState({
            src:"./road/dobong.html"
        })
    }
    gangseo = () => {
        this.setState({
            src:"./road/gangseo.html"
        })
    }
  render() {
    return (
      <div>
        <input type="button" value="도봉"onClick={this.dobong} />
        <input type="button" value="강서"onClick={this.gangseo} />
        <Iframe url={this.state.src}
        width="100%"
        height="1080px"
        id="myId"
        className="road"
        display="initial"
        position="relative"
        frameBorder="none"/>
      </div>
    );
  }
}

export default road;
