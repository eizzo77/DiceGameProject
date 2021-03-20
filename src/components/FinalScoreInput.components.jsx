import react from "react";

class FinalScoreInput extends react.Component {
    state = {finalScore: 100};

    componentDidUpdate = () => {
        this.props.onWinning(this.state.finalScore);
    }

    render() {
        return <div>
            <input type="text" placeHolder={this.props.holder} defaultValue={this.state.finalScore} onBlur={(e) => this.setState({finalScore:e.target.value})}></input>
        </div>
    }
}

export default FinalScoreInput;