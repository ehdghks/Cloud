import scissors from './scissors.png';
import rock from './rock.png';
import paper from './paper.png';
import './App.css';
import { Component } from 'react';

class Title extends Component {
  render() {
    //     제목, 중요 문장은 h1
    return (<h1>가위 바위 보 게임</h1>);
  }
}

class Scissors extends Component {
  render() {
    return (
      <img src={scissors} onClick={() => {
        this.props.onSubmit(0);
      }} />
    );
  }
}

class Rock extends Component {
  render() {
    return (
      <img src={rock} onClick={() => {
        this.props.onSubmit(1);
      }} />
    );
  }
}

class Paper extends Component {
  render() {
    return (
      <img src={paper} onClick={() => {
        this.props.onSubmit(2);
      }} />
    );
  }
}

class Result extends Component {
  render() {
    return (<h1>{this.props.result}</h1>);
  }
}

class App extends Component {
  constructor(props) {   // <=== 이 코드 숙지!
    super(props);
    this.state = {
      you: '-', com: '-', result: '선택해주세요.'
    }
  }

  render() {
    // 0 ~ 2.999999999999999999
    this.state.com = parseInt(Math.random() * 3); 

    if(this.state.you != '-') {
      if( (this.state.you + 1) % 3 == this.state.com ) { //com변수
        // 사람이 졌음
        this.state.result = '당신이 졌습니다.';
      } else if ( this.state.you == this.state.com ) {
        // 비김
        this.state.result = '비겼습니다.';
      } else {
        // 이김
        this.state.result = '당신이 이겼습니다.';
      }
    }

    return (
      <>   {/* Fragment */}
        <Title />
        <Scissors onSubmit={(num) => {
          this.setState( { you: num } ); // 이것도 숙지!!!
          console.log(`app : ${num}`);
        }} />
        <Rock onSubmit={(num) => {
          this.setState( { you: num } ); // 이것도 숙지!!!
          console.log(`app : ${num}`);
        }} />
        <Paper onSubmit={(num) => {
          this.setState( { you: num } ); // 이것도 숙지!!!
          console.log(`app : ${num}`);
        }} />
        <Result result={this.state.result} />
      </>
    );
  }
}

export default App;
