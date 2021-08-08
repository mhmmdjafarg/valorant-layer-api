import "./Player.css";

const Player = () => {
  return (
    <div className="player-card">
      <div className="side-card">Image</div>
      <div className="centre-card">Health</div>
      <div className="side-card">Skills</div>
      {/* <div className="flex w-2/5">
        <div className="flex-auto bg-gray-800 h-24"></div>
        <div className="flex-auto bg-green-500 h-24 grid grid-rows-2 justify-items-center text-white">
          <div className="row-span-1 p-2">1</div>
          <div className="row-span-1 p-2">100</div>
        </div>
        <div className="flex-auto bg-gray-800 h-24"></div>
        <div className="weapon flex-auto bg-transparent h-24"></div>
      </div> */}
    </div>
  );
};

export default Player;
