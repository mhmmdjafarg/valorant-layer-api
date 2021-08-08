import "./PlayerRed.css";

const PlayerRed = () => {
  return (
    <div className="player">
      <div className="weapon">
        <img className="rotate" src="/assets/weapon.svg" alt="" />
      </div>
      <div className="player-card">
      <div className="skill-card skill">
          <div className="row">
            <p>1</p>
            <img className="skill-icon" src="/assets/skill1.svg" alt="" />
          </div>
          <div className="row">
            <p>1</p>
            <img className="skill-icon" src="/assets/skill2.svg" alt="" />
          </div>
          <div className="row empty">
            <p>0</p>
            <img className="skill-icon" src="/assets/skill3.svg" alt="" />
          </div>
        </div>
        <div className="centre-card-red">
          <p>50</p>
          <p>100</p>
        </div>
        <div className="side-card">
          <img className="rotate" src="assets/character.svg" alt="" />
          <p className="player-name">Bambank</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerRed;
