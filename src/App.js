import './App.css';


function App() {
  return (
    <div className="App">
      <div className="player-card flex w-2/5">
          <div className="player-character flex-auto bg-gray-800 h-24">
 
          </div>
          <div className="player-status flex-auto bg-green-500 h-24 grid grid-rows-2 justify-items-center text-white">
              <div className="row-span-1 p-2">1</div>
              <div className="row-span-1 p-2">100</div>
          </div>  
          <div className="player-skill flex-auto bg-gray-800 h-24">

          </div>
          <div className="weapon flex-auto bg-transparent h-24">

          </div>
      </div>
    </div>
  );
}

export default App;