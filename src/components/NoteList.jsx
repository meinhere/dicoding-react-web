import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onArchive }) => {
  if (notes.length) {
    return (
      <div className="notes-list">
        {notes.map((note, index) => (
          <NoteItem
            key={index}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
      </div>
    );
  } else {
    return <div className="notes-list__empty-message">Tidak ada catatan</div>;
  }
};

export default NoteList;
