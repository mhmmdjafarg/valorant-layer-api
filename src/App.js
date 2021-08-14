import React from 'react';
import './App.css';
import './player/Player.css';
import PlayerGreen from './player/PlayerGreen';
import PlayerRed from './player/PlayerRed';


const App = () => {
  const datas = [
    { name: 'Bambank', agent: 'raze', health: '100', shield: '20', weapon: 'rifle', skillQuantity: [1,0,0]}
  ];

  return (
    <div className="App">
      <PlayerGreen datas={datas[0]}/>
      <PlayerGreen datas={datas[0]}/>
      <PlayerGreen datas={datas[0]}/>
      <PlayerRed datas={datas[0]}/>
      <PlayerRed datas={datas[0]}/>
      <PlayerRed datas={datas[0]}/>
    </div>
  );
}

export default App;