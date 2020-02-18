import React from "react";
import axios from "axios";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: undefined
    };
  }

  componentDidMount() {
    axios
      .get(`/getNotes/${this.props.userId}`)
      .then(response => {
        this.setState({
          notes: response.data
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    const { notes } = this.state;
    return (
      <div>
        <h1>Notes</h1>
        {notes ? (
          <div>
            {notes.map(note => (
              <div key={note.logid}>
                <span>Posted at: {note.posting_at}</span>
                <span>level: {note.level}</span>
                <span>note: {note.note}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Notes;
