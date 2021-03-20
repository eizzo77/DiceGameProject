import react from "react";

class GameButton extends react.Component {
    
    render() {
        return (<div>
            <button onClick={this.props.onClick}>{this.props.text}</button>
        </div>
        );
    }
}

export default GameButton;