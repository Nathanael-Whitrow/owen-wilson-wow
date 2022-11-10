import './App.css';
import React, { useEffect } from 'react';
import hee from './audio_files/hee-hee.mp3';
import wow1 from './audio_files/wow1.mp3';
import wow2 from './audio_files/wow2.mp3';
import wow3 from './audio_files/wow3.mp3';
import wow4 from './audio_files/wow4.mp3';
import wow5 from './audio_files/wow5.mp3';
import wow6 from './audio_files/wow6.mp3';
import wow7 from './audio_files/wow7.mp3';
import wow8 from './audio_files/wow8.mp3';


function MyButton(props) {

  const playSound = () => new Audio(props.audioSource).play();

  const detectKeyDown = (e) => {
    if (e.key.toUpperCase() === props.actionKey) {
      props.displayUpdate(props.id);
      playSound();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
  })

  return (
    <button className="drum-pad" id={props.id} onClick={playSound}>
      {props.actionKey}
    </button>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: 'Click on a drum pad...',
    }
    this.setDisplay = this.setDisplay.bind(this);
  }

  setDisplay(newText) {
    this.setState({ displayText: newText });
  }

  render() {
    return (
      <div className="App" id="drum-machine">
        <h1>Owen Wilson Wow</h1>
        <div className="centerBox" id="display">
          <p>{this.state.displayText}</p>
        </div>
        <div className="buttonHolder">
          <MyButton id={"owen wilson saying wow - 1"} audioSource={wow1} actionKey={'Q'} displayUpdate={this.setDisplay} />
          <MyButton id={"owen wilson saying wow - 2"} audioSource={wow2} actionKey={'W'} displayUpdate={this.setDisplay} />
          <MyButton id={"owen wilson saying wow - 3"} audioSource={wow3} actionKey={'E'} displayUpdate={this.setDisplay} />
          <MyButton id={"owen wilson saying wow - 4"} audioSource={wow4} actionKey={'A'} displayUpdate={this.setDisplay} />
          <MyButton id={"owen wilson saying wow - 5"} audioSource={wow5} actionKey={'S'} displayUpdate={this.setDisplay} />
          <MyButton id={"owen wilson saying wow - 6"} audioSource={wow6} actionKey={'D'} displayUpdate={this.setDisplay} />
          <MyButton id={"owen wilson saying wow - 7"} audioSource={wow7} actionKey={'Z'} displayUpdate={this.setDisplay} />
          <MyButton id={"owen wilson saying wow - 8"} audioSource={wow8} actionKey={'X'} displayUpdate={this.setDisplay} />
          <MyButton id={"Michael Jackson saying hee-hee"} audioSource={hee} actionKey={'C'} displayUpdate={this.setDisplay} />
        </div>
      </div>
    );
  }
}

export default App;
