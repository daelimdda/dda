import React, { Component } from 'react';
import './mainboard.css';
import './index2.css'



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
    <div class="board">
    <div class="section">
        <form>
        <div class="article">
            <table class="who">
                <tr><td><div class="p">강사</div></td><td>
                <div class="more">더보기 ></div></td></tr>
            </table>
            <div class="line"></div>
            <table class="notice">
                <tr><td>·</td><td>1111</td><td>2020-05-16</td></tr>
                <tr><td>·</td><td>2222</td><td>2020-04-16</td></tr>
                <tr><td>·</td><td>3333</td><td>2020-03-16</td></tr>
                <tr><td>·</td><td>4444</td><td>2020-02-16</td></tr>
                <tr><td>·</td><td>5555</td><td>2020-01-16</td></tr>
            </table>
        </div>
        <div class="article" id="article2">
            <table class="who">
                <tr><td><div class="p">회원</div></td><td>
                <div class="more">더보기 ></div></td></tr>
            </table>
            <div class="line"></div>
            <table class="notice">
                <tr><td>·</td><td>1111</td><td>2020-05-16</td></tr>
                <tr><td>·</td><td>2222</td><td>2020-04-16</td></tr>
                <tr><td>·</td><td>3333</td><td>2020-03-16</td></tr>
                <tr><td>·</td><td>4444</td><td>2020-02-16</td></tr>
                <tr><td>·</td><td>5555</td><td>2020-01-16</td></tr>
            </table>
        </div>
        </form>
    </div>
    </div>
  );
}
}

export default MB;
