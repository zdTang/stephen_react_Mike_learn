import { useContext } from "react";
import bookContext from "../context/books";

export default function useBooksContext() {
  return useContext(bookContext);
}
