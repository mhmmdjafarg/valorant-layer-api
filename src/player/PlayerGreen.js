import "./PlayerGreen.css";

const PlayerGreen = () => {
  return (
    <div className="player">
      <div className="player-card">
        <div className="side-card">
          <img src="assets/character.svg" alt="" />
        </div>
        <div className="centre-card-green">
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
      <div className="weapon">
        <img src="/assets/weapon.svg" alt="" />
      </div>
    </div>
  );
};

export default PlayerGreen;
