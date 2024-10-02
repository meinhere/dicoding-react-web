import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler = (e) => {
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <div className="note-search__box">
        <input
          type="text"
          className="note-search__input"
          placeholder="Cari catatan.."
          onChange={this.onKeywordChangeHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;
