import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

const NoteAppBody = ({ notes, addNote, onDelete, onArchive }) => {
  const notesActived = notes.filter((note) => !note.archived);
  const notesArchived = notes.filter((note) => note.archived);

  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />

      <div className="note-app__notes">
        <div className="note-app__actived">
          <h2 className="note-app__title">Catatan Aktif</h2>

          <NoteList
            notes={notesActived}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        </div>
        <div className="note-app__archived">
          <h2 className="note-app__title">Catatan Arsip</h2>

          <NoteList
            notes={notesArchived}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteAppBody;
