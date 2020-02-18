import React from "react";
import axios from "axios";
import { sortAllLogs, sortTodayLogs } from "./utils.js";
import { SevenDayLine, DailyBar } from "./Chart.jsx";
import styles from "./style/Stat.css";

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
        let allLog = sortAllLogs(response.data.allLog);
        let todayLog = sortTodayLogs(response.data.todayLog);
        this.setState({
          allLog,
          todayLog
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <div className={styles.stats}>
          <h1>Dashboard</h1>
          <div>
            <span className={styles.graphTitle}>Recent Climbing Progress</span>
            <SevenDayLine data={this.state.allLog} />
          </div>
          <div>
            <span className={styles.graphTitle}>Today's Report</span>
            <DailyBar data={this.state.todayLog} />
          </div>
        </div>
      </div>
    );
  }
}

export default Stat;
