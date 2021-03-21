import react from "react";
import Player from "./Player.components";
import GameFeatures from "./GameFeatures.components";
import "./GameManager.components.css";

// I have a bad feeling about this whole implementation... I could've put some state in other components but I found that as not efficient..
// for example what's the point of putting the player's scores inside player components just so you have to pass it again to here in order to calculate
// it's score with the cubes value... I found that over complicated and decided to put these states here, so you directly passing down the states values...
// I'm sure I have a lot to refactor here.. I'm not happy with that code at all. but that's what I could come up with. I know React for only one week.

class GameManager extends react.Component {
    state = {playerOneCurrentPoints:0,
            playerTwoCurrentPoints:0,
            playerOneTurn: true,
            cubeOneValue:1,
            cubeTwoValue:1,
            playerOneScore:0,
            playerTwoScore:0};

    onRollDiceClick = () => {
        this.setState({
            cubeOneValue: Math.floor(Math.random() * 6) + 1,
            cubeTwoValue: Math.floor(Math.random() * 6) + 1},() => {
            if (this.state.cubeOneValue !== this.state.cubeTwoValue) {
            const cubesSum = this.state.cubeOneValue + this.state.cubeTwoValue;
            this.setState(prevState => 
                 this.state.playerOneTurn ? {playerOneCurrentPoints:prevState.playerOneCurrentPoints + cubesSum} :
                {playerTwoCurrentPoints: prevState.playerTwoCurrentPoints + cubesSum}
        
        )} else {
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
        if (this.state.playerOneScore >= pointsToWin || this.state.playerTwoScore >= pointsToWin) {
            console.log(this.state.playerOneScore >= pointsToWin ? "Player One Wins!" : "Player Two Wins!");
            this.onNewGame();     
        }
    }

    onNewGame = () => {
        this.setState(
            {playerOneCurrentPoints:0,
            playerTwoCurrentPoints:0,
            playerOneTurn:true,
            cubeOneValue:1,
            cubeTwoValue:1,
            playerOneScore:0,
            playerTwoScore:0
        })
    }

    render() { 
        return (
        <div className="game-manager">
            <Player name="Player 1" points={this.state.playerOneCurrentPoints} score={this.state.playerOneScore}></Player>
            <GameFeatures onRollDiceClick={this.onRollDiceClick} onHoldClick={this.onHoldClick} onWinning={this.getWinner} onNewGame={this.onNewGame} 
                minScore={Math.max(this.state.playerOneScore,this.state.playerTwoScore)} cubeOneValue={this.state.cubeOneValue} cubeTwoValue={this.state.cubeTwoValue}/>
            <Player name="Player 2" points={this.state.playerTwoCurrentPoints} score={this.state.playerTwoScore}></Player>
        </div>
        ); 
    }
}

export default GameManager;