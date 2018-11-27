import React, { Component } from "react";
// import "./App.css";
//
import * as d3 from "d3";

const data = [1, 2, 3, 4];

export const BarChart = () => {
  const height = 400;
  const width = 400;

  let pie = d3.pie()(data);

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${width / 2},${height / 2})`}>
        <Slice pie={pie} />
      </g>
    </svg>
  );
};

const Slice = props => {
  let { pie } = props;

  let arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(100);

  let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358");

  return pie.map((slice, index) => {
    let sliceColor = interpolate(index / (pie.length - 1));

    return <path d={arc(slice)} fill={sliceColor} />;
  });
};

export default BarChart;
// class BarChart extends Component {
//   constructor(props) {
//     super(props);
//     this.createBarChart = this.createBarChart.bind(this);
//   }
//   componentDidMount() {
//     this.createBarChart();
//   }
//   componentDidUpdate() {
//     this.createBarChart();
//   }
//   createBarChart() {
//     const node = this.node;
//     const dataMax = max(this.props.data);
//     const yScale = scaleLinear()
//       .domain([0, dataMax])
//       .range([0, this.props.size[1]]);
//     select(node)
//       .selectAll("rect")
//       .data(this.props.data)
//       .enter()
//       .append("rect");

//     select(node)
//       .selectAll("rect")
//       .data(this.props.data)
//       .exit()
//       .remove();

//     select(node)
//       .selectAll("rect")
//       .data(this.props.data)
//       .style("fill", "#fe9922")
//       .attr("x", (d, i) => i * 25)
//       .attr("y", d => this.props.size[1] - yScale(d))
//       .attr("height", d => yScale(d))
//       .attr("width", 25);
//   }
//   render() {
//     return <svg ref={node => (this.node = node)} width={500} height={500} />;
//   }
// }
// export default BarChart;
