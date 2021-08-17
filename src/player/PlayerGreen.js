import "./PlayerGreen.css";

const PlayerGreen = (props) => {
  // Looping through skills
  const skillList = props.datas.skillQuantity.map((quantity, key) => (
    <div className={`row ${(quantity === 0) ? 'empty' : ''} `} key={key + 'green'}>
      <img
        className="skill-icon"
        src={process.env.PUBLIC_URL + `/assets/${props.datas.agent + (key+1)}.svg`}
        alt=""
      />
      <p>{props.datas.skillQuantity[key]}</p>
    </div>
  ));

  return (
    <div className="player">
      <div className="player-card">
        <div className="side-card">
          <img src={process.env.PUBLIC_URL + `/assets/${props.datas.agent}.svg`} alt="" />
          <p className="player-name">{props.datas.name}</p>
        </div>
        <div className="centre-card-green">
          <p>{props.datas.shield}</p>
          <p>{props.datas.health}</p>
        </div>
        <div className="skill-card skill">
          {skillList}
        </div>
      </div>
      <div className="weapon">
        <img src={process.env.PUBLIC_URL + `/assets/${props.datas.weapon}.png`} alt="" />
      </div>
      <div id="circle-green">
        <img className="circular-image" src={process.env.PUBLIC_URL +  `/assets/${props.datas.agent + 'ultimate'}.svg`} alt="" />
      </div>
    </div>
  );
};

export default PlayerGreen;
