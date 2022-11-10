import './App.css';
import React, { useEffect } from 'react';
import hee from './audio_files/hee-hee.mp3';


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
    <button onClick={playSound}>
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
        <h1>Drum Machine</h1>
        <div className="centerBox">
          <p>volume goes here</p>
          <p>buttons go in here</p>
          <MyButton audioSource={hee} actionKey={'q'} />
        </div>
      </div>
    );
  }
}

export default App;
