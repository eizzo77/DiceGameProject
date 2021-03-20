import react from "react";
import GameButton from "./GameButton.components";
import FinalScoreInput from "./FinalScoreInput.components";
import "./GameFeatures.components.css";

class GameFeatures extends react.Component {


    render() {
        return (
        <div className="game-features">
            <GameButton text="New Game" logo=""></GameButton>
            <GameButton text="Roll Dice" logo="" onClick={this.props.onRollDiceClick}></GameButton>
            <GameButton text="Hold" logo="" onClick={this.props.onHoldClick}></GameButton>
            <FinalScoreInput holder="Final Score" onWinning={this.props.onWinning}></FinalScoreInput>
        </div>
        );
    }
}

export default GameFeatures;