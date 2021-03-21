import react from "react";
import "./Cube.components.css";

class Cube extends react.Component {

    render() {
        return (<div className="cube">
            <img className={`dice-${this.props.cubeValue}`} width="50px" height="50px"></img>
        </div>);
    }
}

export default Cube;