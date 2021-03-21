import react from "react";
import GameButton from "./GameButton.components";
import FinalScoreInput from "./FinalScoreInput.components";
import Cube from "./Cube.components";
import "./GameFeatures.components.css";

class GameFeatures extends react.Component {


    render() {
        return (
        <div className="game-features">
            <GameButton text="New Game" logo="" onClick={this.props.onNewGame}></GameButton>
            <Cube cubeValue={this.props.cubeOneValue}/>
            <Cube cubeValue={this.props.cubeTwoValue}/>
            <GameButton text="Roll Dice" logo="" onClick={this.props.onRollDiceClick}></GameButton>
            <GameButton text="Hold" logo="" onClick={this.props.onHoldClick}></GameButton>
            <FinalScoreInput holder="Final Score" onWinning={this.props.onWinning} minScore={this.props.minScore}></FinalScoreInput>
        </div>
        );
    }
}

export default GameFeatures;