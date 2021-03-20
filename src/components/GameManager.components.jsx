import react from "react";
import Player from "./Player.components";
import GameFeatures from "./GameFeatures.components";
import "./GameManager.components.css";

class GameManager extends react.Component {
    state = {playerOneCurrentPoints:0,
            playerTwoCurrentPoints:0,
            playerOneTurn: true,
            cubeOneValue:0,
            cubeTwoValue:0,
            playerOneScore:0,
            playerTwoScore:0};

    onRollDiceClick = () => {
        this.setState({cubeOneValue: Math.floor(Math.random() * 6) + 1,
        cubeTwoValue: Math.floor(Math.random() * 6) + 1},() => {
        console.log("CUBE 1:" + this.state.cubeOneValue);
        console.log("CUBE 2:" + this.state.cubeTwoValue);
        if (this.state.cubeOneValue !== this.state.cubeTwoValue) {
        const cubesSum = this.state.cubeOneValue + this.state.cubeTwoValue;
        this.setState(prevState => {
            return this.state.playerOneTurn ? {playerOneCurrentPoints:prevState.playerOneCurrentPoints + cubesSum} :
             {playerTwoCurrentPoints: prevState.playerTwoCurrentPoints + cubesSum};
        
        })} else {
            this.switchTurn();
        }})
    }

    switchTurn = () => {
        this.setState(prevState => prevState.playerOneTurn ? {playerOneCurrentPoints:0,playerOneTurn:!prevState.playerOneTurn} :
            {playerTwoCurrentPoints:0,playerOneTurn:!prevState.playerOneTurn});
    }

    onHoldClick = () => {
        this.setState((prevState) => this.state.playerOneTurn ? {playerOneScore:prevState.playerOneScore + this.state.playerOneCurrentPoints} :
         {playerTwoScore:prevState.playerTwoScore + this.state.playerTwoCurrentPoints},()=>this.switchTurn())
    }

    getWinner = (pointsToWin) => {
        this.state.playerOneScore >= pointsToWin && console.log("Player One Wins!")
        this.state.playerTwoScore >= pointsToWin && console.log("Player Two Wins!")
    }

    render() {
        {console.log(this.state)}   
        return (
        <div className="game-manager">
            <Player name="Player 1" points={this.state.playerOneCurrentPoints} score={this.state.playerOneScore}></Player>
            <GameFeatures onRollDiceClick={this.onRollDiceClick} onHoldClick={this.onHoldClick} onWinning={this.getWinner}/>
            <Player name="Player 2" points={this.state.playerTwoCurrentPoints} score={this.state.playerTwoScore}></Player>
        </div>
        ); 
    }
}

export default GameManager;