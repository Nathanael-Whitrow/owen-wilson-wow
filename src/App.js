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
    if (e.key === props.actionKey) {
      playSound();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
  })

  return (
    <button className="audioButton" onClick={playSound}>
      {props.actionKey}
    </button>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someState: 'derp',
    }
    // this.playSound = this.playSound.bind(this.playSound);
  }

  render() {
    return (
      <div className="App">
        <h1>Owen Wilson Wow</h1>
        <div className="centerBox">
          <p>volume goes here</p>
          <div className="buttonHolder">
            <MyButton audioSource={wow1} actionKey={'Q'} />
            <MyButton audioSource={wow2} actionKey={'W'} />
            <MyButton audioSource={wow3} actionKey={'E'} />
            <MyButton audioSource={wow4} actionKey={'A'} />
            <MyButton audioSource={wow5} actionKey={'S'} />
            <MyButton audioSource={wow6} actionKey={'D'} />
            <MyButton audioSource={wow7} actionKey={'Z'} />
            <MyButton audioSource={wow8} actionKey={'X'} />
            <MyButton audioSource={hee} actionKey={'C'} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
