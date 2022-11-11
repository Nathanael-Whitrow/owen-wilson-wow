import './App.css';
import React, { useEffect, useState } from 'react';
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

  const playSound = () => {
    props.displayUpdate(props.id);
    document.getElementById(props.actionKey).play();
  }

  return (
    <button className="drum-pad" id={props.id} onClick={playSound}>
      <audio
        id={props.actionKey}
        className="clip"
        src={props.audioSource} ></audio>
      {props.actionKey}
    </button>
  )
}


function App() {
  const [message, setMessage] = useState('Click on a button...');

  function handleButton(e) {
    switch (e.key.toUpperCase()) {
      case 'Q':
        document.getElementById('Q').play();
        setMessage('Owen Wilson saying wow - 1');
        break;
      case 'W':
        document.getElementById('W').play();
        setMessage('Owen Wilson saying wow - 2');
        break;
      case 'E':
        document.getElementById('E').play();
        setMessage('Owen Wilson saying wow - 3');
        break;
      case 'A':
        document.getElementById('A').play();
        setMessage('Owen Wilson saying wow - 4');
        break;
      case 'S':
        document.getElementById('S').play();
        setMessage('Owen Wilson saying wow - 5');
        break;
      case 'D':
        document.getElementById('D').play();
        setMessage('Owen Wilson saying wow - 6');
        break;
      case 'Z':
        document.getElementById('Z').play();
        setMessage('Owen Wilson saying wow - 7');
        break;
      case 'X':
        document.getElementById('X').play();
        setMessage('Owen Wilson saying wow - 8');
        break;
      case 'C':
        document.getElementById('C').play();
        setMessage('Michael Jackson saying hee-hee');
        break;
      default:
        setMessage('Click on a button...');
    };
  }

  useEffect(() => {
    document.addEventListener('keydown', handleButton, true);
    return () => document.removeEventListener('keydown', handleButton, true);
  });

  return (
    <div className="App" id="drum-machine">
      <h1>Owen Wilson Wow</h1>
      <div className="centerBox">
        <p id="display">{message}</p>
      </div>
      <div className="buttonHolder">
        <MyButton id={"owen wilson saying wow - 1"} audioSource={wow1} actionKey={'Q'} displayUpdate={setMessage} />
        <MyButton id={"owen wilson saying wow - 2"} audioSource={wow2} actionKey={'W'} displayUpdate={setMessage} />
        <MyButton id={"owen wilson saying wow - 3"} audioSource={wow3} actionKey={'E'} displayUpdate={setMessage} />
        <MyButton id={"owen wilson saying wow - 4"} audioSource={wow4} actionKey={'A'} displayUpdate={setMessage} />
        <MyButton id={"owen wilson saying wow - 5"} audioSource={wow5} actionKey={'S'} displayUpdate={setMessage} />
        <MyButton id={"owen wilson saying wow - 6"} audioSource={wow6} actionKey={'D'} displayUpdate={setMessage} />
        <MyButton id={"owen wilson saying wow - 7"} audioSource={wow7} actionKey={'Z'} displayUpdate={setMessage} />
        <MyButton id={"owen wilson saying wow - 8"} audioSource={wow8} actionKey={'X'} displayUpdate={setMessage} />
        <MyButton id={"Michael Jackson saying hee-hee"} audioSource={hee} actionKey={'C'} displayUpdate={setMessage} />
      </div>
    </div>
  );
}

export default App;
