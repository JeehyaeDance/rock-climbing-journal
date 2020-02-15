import React from "react";
import axios from "axios";
import { sortLogs } from "./utils.js";
import { SevenDayLine, DailyBar } from "./Chart.jsx";

class Stat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allLog: undefined,
      todayLog: undefined
    };
  }

  componentDidMount() {
    axios
      .get(`/logs/${this.props.userId}`)
      .then(response => {
        let allLog = sortLogs(response.data.allLog);
        this.setState({
          allLog: allLog,
          todayLog: response.data.todayLog
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
          <SevenDayLine data={this.state.allLog} />
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
