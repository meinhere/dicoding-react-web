import React from "react";
import NoteSearch from "./NoteSearch";

const NoteAppHeader = ({ onSearch }) => {
  return (
    <div className="note-app__header">
      <h1>NotesApp</h1>

      <NoteSearch onSearch={onSearch} />
    </div>
  );
};

export default NoteAppHeader;
