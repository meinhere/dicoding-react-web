import React from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonArchive from "./ButtonArchive";

const NoteItemAction = ({ archived, id, onDelete, onArchive }) => {
  return (
    <div className="note-item__action">
      <ButtonDelete id={id} onDelete={onDelete} />
      <ButtonArchive id={id} archived={archived} onArchive={onArchive} />
    </div>
  );
};

export default NoteItemAction;
