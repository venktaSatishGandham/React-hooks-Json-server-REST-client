import { useState } from "react";
import BookEdit from "./BookEdit";
import { useBooksContext } from "../hooks/useBooksContext";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);

  const { handleDeleteBook } = useBooksContext();

  const handleDeleteButtonClick = () => {
    handleDeleteBook(book.id);
  };

  const handleEditButtonClick = () => {
    setShowEdit(!showEdit);
  };

  const toggleEditForm = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit toggleForm={toggleEditForm} book={book} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditButtonClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteButtonClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
