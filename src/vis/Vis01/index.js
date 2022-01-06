import React from "react";
import Ball from "./components/Ball";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Vis01 extends React.Component {
  state = {
    ballLeft: true
  };
  ballJump = () =>
    this.setState({
      ballLeft: !this.state.ballLeft
    });

  render() {
    const { ballLeft } = this.state;
    return (
      <div style={styles}>
        <h1>D3 transitions in React 16.3 {"\u2728"}</h1>
        <p>Click the ball 👇</p>
        <svg style={{ width: "500", height: "200"}} onClick={this.ballJump}>
          <Ball x={ballLeft ? 20 : 480} />
        </svg>
      </div>
    );
  }
}

export default Vis01;