import React from "react";
import axios from "axios";
import { sortLogs, getToday } from "./utils.js";
import { SevenDayLine, DailyBar } from "./Chart.jsx";

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
        let today = getToday();
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
        <div>
          <span>Recent Climbing Progress</span>
          <SevenDayLine data={this.state.logs} />
        </div>
        <div>
          <span>Today's Report</span>
          <DailyBar />
        </div>
      </div>
    );
  }
}

export default Stat;
