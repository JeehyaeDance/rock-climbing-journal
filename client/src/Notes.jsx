import React from "react";
import axios from "axios";
import styles from "./style/Notes.css";

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
        {notes ? (
          <div className={styles.noteAlign}>
            <h1>Notes</h1>
            {notes.map(note => (
              <div key={note.logid} className={styles.noteBox}>
                <span>Posted at: {new Date(note.posting_at).toString()}</span>
                <span>level: {note.level}</span>
                <span>note: {note.note}</span>
              </div>
            ))}
          </div>
        ) : (
          <span>There is no notes saved</span>
        )}
      </div>
    );
  }
}

export default Notes;
