import React from "react";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import Option from "./Option.jsx";
import styles from "./style/Settings.css";

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { path, url, params } = this.props.match;
    return (
      <div className={styles["setting-page"]}>
        <div className={styles.table}>
          <span className={styles["table-head"]}>Personal Settings</span>
          <NavLink to={`${url}/User Id`} className={styles["table-row"]} activeClassName={styles["active-row"]}>
            User Id
          </NavLink>
          <span className={styles["table-row"]}>Password</span>
        </div>
        <div className={styles["sub-content"]}>
          <Switch>
            <Route exact path={path}>
              <p>Please select option.</p>
            </Route>
            <Route path={`${path}/:option`}>
              <Option userId={this.props.userId} param={params} />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Setting);
