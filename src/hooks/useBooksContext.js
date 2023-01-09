import { useContext } from "react";
import BooksContext from "../context/Books";

export function useBooksContext() {
  return useContext(BooksContext);
}
