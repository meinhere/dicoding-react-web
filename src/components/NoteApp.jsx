import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import { getInitialData } from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler = (id) => {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  };

  onArchiveHandler = (id, archived) => {
    const note = this.state.notes.find((note) => note.id === id);
    note.archived = !archived;
    this.setState({ notes: [...this.state.notes] });
  };

  onSearchHandler = (keyword) => {
    const notes = getInitialData().filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    this.setState({ notes });
  };

  render() {
    return (
      <div className="note-app">
        <NoteAppHeader onSearch={this.onSearchHandler} />

        <NoteAppBody
          notes={this.state.notes}
          addNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
