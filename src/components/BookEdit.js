import { useState } from "react";
import { useBooksContext } from "../hooks/useBooksContext";

function BookEdit({ book, toggleForm }) {
  const [title, setTitle] = useState(book.title);
  const { handleEditBook } = useBooksContext();

  const handleForm = (e) => {
    e.preventDefault();
    toggleForm();
    handleEditBook(title, book.id);
    setTitle("");
  };

  const handleEditInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleForm} className="book-edit">
      <label>title</label>
      <input className="input" onChange={handleEditInput} value={title} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
