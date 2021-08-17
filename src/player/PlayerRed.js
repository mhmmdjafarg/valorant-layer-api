import "./PlayerRed.css";

const PlayerRed = (props) => {
  // Looping through skills
  const skillList = props.datas.skillQuantity.map((quantity, key) => (
    <div className={`row ${quantity === 0 ? "empty" : ""} `} key={key + 'red'}>
      <p>{props.datas.skillQuantity[key]}</p>
      <img
        className="skill-icon"
        src={`${process.env.PUBLIC_URL}/assets/${props.datas.agent + (key + 1)}.svg`}
        alt=""
      />
    </div>
  ));

  return (
    <div className="player">
      <div className="weapon">
        <img
          className="rotate"
          src={`${process.env.PUBLIC_URL}/assets/${props.datas.weapon}.png`}
          alt=""
        />
      </div>
      <div className="player-card">
        <div className="skill-card skill">{skillList}</div>
        <div className="centre-card-red">
          <p>{props.datas.shield}</p>
          <p>{props.datas.health}</p>
        </div>
        <div className="side-card">
          <img
            className="rotate"
            src={`${process.env.PUBLIC_URL}/assets/${props.datas.agent}.svg`}
            alt=""
          />
          <p className="player-name">{props.datas.name}</p>
        </div>
      </div>
      <div id="circle-red">
        <img
          className="circular-image"
          src={`${process.env.PUBLIC_URL}/assets/${props.datas.agent + "ultimate"}.svg`}
          alt=""
        />
      </div>
    </div>
  );
};

export default PlayerRed;
