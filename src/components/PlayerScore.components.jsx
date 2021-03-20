import react from "react";

class PlayerScore extends react.Component {
    // state = {currentScore: 0};

    render() {
        return (
          <div>
             <div>{this.props.text}</div>
             <div>{this.props.score}</div>
         </div>
        );
    }
}

export default PlayerScore;