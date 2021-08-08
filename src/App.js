import React from 'react';
import './App.css';
import PlayerGreen from './player/PlayerGreen';
import PlayerRed from './player/PlayerRed';


const App = () => {
  return (
    <div className="App">
      <PlayerGreen/>
      <PlayerGreen/>
      <PlayerGreen/>
      <PlayerRed/>
      <PlayerRed/>
      <PlayerRed/>
    </div>
  );
}

export default App;