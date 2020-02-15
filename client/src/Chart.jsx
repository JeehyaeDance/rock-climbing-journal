import React from "react";
import { LineChart, BarChart, Bar, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import styles from "./style/Chart.css";

export function SevenDayLine(props) {
  return (
    <div className={styles.chart}>
      <LineChart width={600} height={300} data={props.data} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
        <Line type="monotone" dataKey="avgLevel" stroke="#696969" activeDot={{ r: 6 }} />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export function DailyBar(props) {
  return (
    <div className={styles.chart}>
      <BarChart width={600} height={300} data={props.data} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="level" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" />
      </BarChart>
    </div>
  );
}
