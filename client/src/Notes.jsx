import React from "react";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: undefined
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Notes</h1>
      </div>
    );
  }
}

export default Notes;
