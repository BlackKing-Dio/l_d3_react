import React from "react";
import * as d3 from "d3";

class Ball extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      x: props.x
    };
  }

  circleRef = React.createRef();

  componentDidUpdate() {
    let el = d3.select(this.circleRef.current);

    el.transition()
      .duration(800)
      .ease(d3.easeBounceOut)
      .attr("cx", this.props.x)
      // .style("background-color","rgb(142, 137, 137)")
      .attr("fill","rgb(189, 187, 137)")
      .on("end", () =>
        this.setState({
          x: this.props.x
        })
      );
  }

  render() {
    const { x } = this.state;
    
    return <circle r="20" cx={x} cy={20} fill="rgb(189, 187, 137)" ref={this.circleRef} />;
  }
}

export default Ball;
