import react from "react";
import "./GameButton.components.css";

class GameButton extends react.Component {
    
    render() {
        return (
        <div className="game-button">
            <button onClick={this.props.onClick}>{this.props.text}</button>
        </div>
        );
    }
}

export default GameButton;