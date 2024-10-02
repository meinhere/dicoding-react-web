import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";
import { showFormattedDate } from "../utils/index";

const NoteItem = ({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
}) => {
  return (
    <div className="note-item">
      <NoteItemContent
        title={title}
        body={body}
        createdAt={showFormattedDate(createdAt)}
      />
      <NoteItemAction
        archived={archived}
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
};

export default NoteItem;
