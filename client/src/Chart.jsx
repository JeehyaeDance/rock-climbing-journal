import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import styles from "./style/Chart.css";

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.chart}>
        <LineChart width={600} height={300} data={this.props.data} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
          <Line type="monotone" dataKey="y" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}
export default Chart;
