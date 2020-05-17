import React, { Component } from 'react';

class quiz extends Component {
  state = {
    word : '이주상',
    value : '',
    time:0,
    result : '',
    answer: ['1','4','4'],
    quiz:[<img src={require("../image/quiz1.PNG")}/>,
    <img src={require("../image/quiz2.PNG")}/>,
    <img src={require("../image/quiz3.PNG")}/>
    ]
  };

  onSubmitForm= (e) =>{
    e.preventDefault();
    
    if(this.state.answer[this.state.time] === this.state.value){
        
      this.setState({
        result:'딩동댕',
        value:'',
        time: this.state.time +1
      });
      
    }else {
      this.setState({
        result:'땡',
        value:'',
      });
    
    }
  }
  onChange = (e) => {
    this.setState({value:e.target.value});
  }
  input;

 
  render() {
    return (
      <>
      
      <div className="quizimg">{this.state.quiz[this.state.time]}</div>
      <div className="quizanswer">
      <form onSubmit={this.onSubmitForm}>
        <input type="radio" name="radioGroup" value = "1" onChange={this.onChange}/>1
        <input type="radio" name="radioGroup" value = "2" onChange={this.onChange}/>2
        <input type="radio" name="radioGroup" value = "3" onChange={this.onChange}/>3
        <input type="radio" name="radioGroup"value = "4" onChange={this.onChange}/>4
        <button>확인</button>
        <div>{this.state.result}</div>
      </form>
      </div>
      
      </>
    );
  }
}


export default quiz;