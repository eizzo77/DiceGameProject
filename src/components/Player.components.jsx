import react from "react";
import PlayerScore from "./PlayerScore.components";
import "./Player.components.css";

class Player extends react.Component {
    render()
    {  {console.log(this.props.points)}
        return <div className="player">
            <div className="player-name">
            {this.props.name}
            </div>
            <div className="player-score">
            {this.props.points}
            </div>
            <div>
            <PlayerScore text="Current" score={this.props.score}></PlayerScore>
            </div>
        </div>
    }
}

export default Player;