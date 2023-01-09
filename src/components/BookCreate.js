import { useState } from "react";
import { useBooksContext } from "../hooks/useBooksContext";

export default function BookCreate() {
  const [title, setTitle] = useState("");
  const { handleAddBook } = useBooksContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBook(title);
    setTitle("");
  };

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleInput} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}
