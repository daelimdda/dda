import React, { Component } from 'react';
import './road.css';
import './index2.css';

import Iframe from 'react-iframe';

class road extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src:""
    };
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
    gangnamB = () => {
      this.setState({
          src:"./road/gangnamB.html"
      })
    }
    gangnamC = () => {
      this.setState({
          src:"./road/gangnamC.html"
      })
    }
    gangseoA = () => {
      this.setState({
          src:"./road/gangseoA.html"
      })
    }
  render() {
    return (

      <div>
        <div className="fl">
        <nav>
            <ul className="flul">
                <h4>강남</h4>
                <li>
                <a href="#" onClick={this.gangnam}>A</a>
                <a href="#" onClick={this.gangnamB}>B</a>
                <a href="#" onClick={this.gangnamC}>C</a>
                <a href="#" onClick={this.gangnam}>D</a>
                </li>
                
                <h4>강서</h4>
                <li>
                <a href="#" onClick={this.gangseoA}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>도봉</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>서부</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>부산남부</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>부산북부</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>용인</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>안산</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>의정부</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>춘천</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>강릉</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>원주</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>태백</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>전북</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>전남</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>광양</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>청주</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>충주</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>예산</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>문경</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>포항</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>마산</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>인천</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>대구</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>대전</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>울산</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>

                <h4>제주</h4>
                <li>
                <a href="#" onClick={this.dobong}>A</a>
                <a href="#" onClick={this.dobong}>B</a>
                <a href="#" onClick={this.dobong}>C</a>
                <a href="#" onClick={this.dobong}>D</a>
                </li>
            </ul>
        </nav>
        </div>

        <div className="fl1">
          <Iframe url={this.state.src}
          width="100%"
          height="850px"
          id="myId"
          className="road"
          display="initial"
          position="relative"
          frameBorder="none"/>
        </div>
      </div>
    );
  }
}

export default road;
