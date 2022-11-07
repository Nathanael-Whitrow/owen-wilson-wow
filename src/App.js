import './App.css';
import React from 'react';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someState: 'derp',
    }
  }

  render() {

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();



    return (
      <div className="App">
        <h1>Drum Machine</h1>
        <div className="centerBox">
          <p>volume goes here</p>
          <p>buttons go in here</p>
          <button></button>
        </div>
      </div>
    );
  }
}

export default App;
