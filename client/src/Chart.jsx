import React from "react";
import { LineChart, BarChart, Bar, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import styles from "./style/Chart.css";

export function SevenDayLine(props) {
  return (
    <div className={styles.chart}>
      <LineChart width={600} height={300} data={props.data} margin={{ top: 20, right: 20, bottom: 0, left: 0 }}>
        <Line type="monotone" dataKey="avgLevel" stroke="#3D85A4" activeDot={{ r: 6 }} />
        <CartesianGrid stroke="#B3D1DE" strokeDasharray="3 3" />
        <XAxis dataKey="date" stroke="#1d3e4b" />
        <YAxis stroke="#1d3e4b" />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export function DailyBar(props) {
  return (
    <div className={styles.chart}>
      <BarChart width={600} height={300} data={props.data} margin={{ top: 20, right: 20, bottom: 0, left: 0 }}>
        <CartesianGrid stroke="#B3D1DE" strokeDasharray="3 3" />
        <XAxis dataKey="level" stroke="#1d3e4b" />
        <YAxis stroke="#1d3e4b" />
        <Tooltip />
        <Bar dataKey="count" barSize={30} fill="#3D85A4" />
      </BarChart>
    </div>
  );
}
