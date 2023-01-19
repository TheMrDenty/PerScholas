import Board from "./components/Board";
import Header from "./components/Header";
import Player from "./components/Player";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Player whichPlayer='X' />
      <Player whichPlayer='O' />
      <Board />
    </div>
  );
}

export default App;
