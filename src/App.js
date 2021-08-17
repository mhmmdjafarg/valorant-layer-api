import React from "react";
import "./App.css";
import "./player/Player.css";
import PlayerGreen from "./player/PlayerGreen";
import PlayerRed from "./player/PlayerRed";

const App = () => {
  const datas = [
    {
      name: "Bambank",
      agent: "raze",
      health: "100",
      shield: "20",
      weapon: "Ares",
      skillQuantity: [1, 2, 0],
    },
  ];

  return (
    <div className="content-wrapper">
    <div className="content">
      <div className="green-side">
        <PlayerGreen datas={datas[0]} />
        <PlayerGreen datas={datas[0]} />
        <PlayerGreen datas={datas[0]} />
        <PlayerGreen datas={datas[0]} />
        <PlayerGreen datas={datas[0]} />
      </div>
      <div className="red-side">
        <PlayerRed datas={datas[0]} />
        <PlayerRed datas={datas[0]} />
        <PlayerRed datas={datas[0]} />
        <PlayerRed datas={datas[0]} />
        <PlayerRed datas={datas[0]} />
      </div>
    </div>  
    </div>
    
  );
};

export default App;
