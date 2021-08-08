import "./Player.css";

const Player = () => {
  return (
    <div className="player">
      <div className="player-card">
        <div className="side-card">
          <img src="assets/character.svg" alt="" />
        </div>
        <div className="centre-card">
          <p>50</p>
          <p>100</p>
        </div>
        <div className="skill-card skill">
          <div className="row">
            <img className="skill-icon" src="/assets/skill1.svg" alt="" />
            <p>1</p>
          </div>
          <div className="row">
            <img className="skill-icon" src="/assets/skill2.svg" alt="" />
            <p>2</p>
          </div>
          <div className="row">
            <img className="skill-icon empty" src="/assets/skill3.svg" alt="" />
            <p>0</p>
          </div>
        </div>
      </div>
      <div className="weapon"></div>
    </div>
  );
};

export default Player;
