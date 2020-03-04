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
      <div className={styles.stats}>
        <h2 className={styles.graphTitle}>Today's Report</h2>
        <DailyBar data={this.state.todayLog} />
        <h2 className={styles.graphTitle}>Recent Climbing Progress</h2>
        <SevenDayLine data={this.state.allLog} />
      </div>
    );
  }
}

export default Stat;
