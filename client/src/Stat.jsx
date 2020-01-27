import React from "react";
import axios from "axios";
import { sortLogs } from "./utils.js";
import Chart from "./Chart.jsx";

class Stat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: undefined
    };
  }

  componentDidMount() {
    axios
      .get(`/logs/${this.props.userId}`)
      .then(response => {
        let logs = sortLogs(response.data);
        this.setState({
          logs: logs
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Chart data={this.state.logs} />
      </div>
    );
  }
}

export default Stat;
