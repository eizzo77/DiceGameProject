import react from "react";
import reactDOM from "react-dom";
import GameManager from "./components/GameManager.components";
import "./index.css";

class App extends react.Component {
  render() {
    return (
      <div className="game-board">
        <GameManager />
      </div>
    );
  }
}

reactDOM.render(<App />, document.querySelector("#root"));
