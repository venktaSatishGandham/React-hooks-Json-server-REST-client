import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:2345/books");

    setBooks(response.data);
  };

  const stableFetchBooks = useCallback(fetchBooks, []);

  const handleAddBook = async (title) => {
    const response = await axios.post("http://localhost:2345/books", {
      title: title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const handleDeleteBook = async (id) => {
    await axios.delete(`http://localhost:2345/books/${id}`);

    const updatedBooks = books.filter((book) => id !== book.id);
    setBooks(updatedBooks);
  };

  const handleEditBook = async (newTitle, id) => {
    const response = await axios.put(`http://localhost:2345/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (id === book.id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books: books,
    handleAddBook: handleAddBook,
    handleDeleteBook: handleDeleteBook,
    handleEditBook: handleEditBook,
    stableFetchBooks: stableFetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;
