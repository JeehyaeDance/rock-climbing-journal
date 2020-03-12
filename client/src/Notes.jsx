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
      <div className={styles["content-page"]}>
        {notes ? (
          <div className={styles.noteAlign}>
            <div className={styles["table-head"]}>
              <p className={styles["table-note"]}>Note</p>
              <p className={styles["table-level"]}>Level</p>
              <p className={styles["table-date"]}>Date Added</p>
            </div>
            {notes.length === 0 ? (
              <p>No Note added</p>
            ) : (
              notes.map(note => (
                <div key={note.logid} className={styles["table-row"]}>
                  <p className={styles["table-note"]}>{note.note}</p>
                  <p className={styles["table-level"]}>V{note.level}</p>
                  <p className={styles["table-date"]}>
                    {new Date(note.posting_at).toDateString() + " "}
                    {new Date(note.posting_at).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      hour12: true,
                      minute: "numeric"
                    })}
                  </p>
                </div>
              ))
            )}
          </div>
        ) : (
          <p>There is no notes saved</p>
        )}
      </div>
    );
  }
}

export default Notes;
