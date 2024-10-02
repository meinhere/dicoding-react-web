import React from "react";
import ButtonAdd from "./ButtonAdd";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      count: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler = (e) => {
    const val = e.target.value;
    const max_count = 50;

    this.setState(() => {
      if (val.length <= max_count) {
        return { title: e.target.value, count: max_count - val.length };
      }
    });
  };

  onBodyChangeHandler = (e) => {
    this.setState(() => {
      return { body: e.target.value };
    });
  };

  onSubmitEventHandler = (e) => {
    e.preventDefault();
    this.props.addNote(this.state);
  };

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2 className="note-input__title">Tambah Catatan</h2>

        <p className="note-input__title__char-limit">
          Sisa karakter: {this.state.count}
        </p>
        <input
          type="text"
          placeholder="Judul catatan.."
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
        />
        <textarea
          value={this.state.body}
          onChange={this.onBodyChangeHandler}
          placeholder="Tulis catatan.."
          rows={10}
        ></textarea>

        <ButtonAdd />
      </form>
    );
  }
}

export default NoteInput;
