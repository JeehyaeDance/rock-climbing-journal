import React from "react";
import Page from "./Page";
import styles from "./style/Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  clickHandler(e) {
    e.preventDefault();
    this.props.clickHandler(this.state.userName, this.state.password, this.props.cb);
  }

  render() {
    let { userName, password } = this.state;
    return (
      <Page className={styles.page}>
        <h1>{this.props.type}</h1>
        <div className={styles.form}>
          <div className={styles.inputs}>
            <input
              className={styles.input}
              placeholder="User Name"
              id="userName"
              type="text"
              value={userName}
              onChange={this.changeHandler}
            />
            <input
              className={styles.input}
              placeholder="Password"
              id="password"
              type="password"
              value={password}
              onChange={this.changeHandler}
            />
          </div>
          <span className={styles.button} onClick={this.clickHandler}>
            {this.props.type}
          </span>
        </div>
      </Page>
    );
  }
}

export default Form;
