import React from "react";

const ButtonArchive = ({ id, archived, onArchive }) => {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => onArchive(id, archived)}
    >
      {archived ? "Tampilkan" : "Arsipkan"}
    </button>
  );
};

export default ButtonArchive;
