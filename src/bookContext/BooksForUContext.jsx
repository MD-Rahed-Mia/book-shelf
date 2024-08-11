import { createContext, useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";

export const BooksForUContext = createContext(null);

const BooksForUProvider = ({ children }) => {
  const [books, setBooks] = useState(null);
  const { data, loading } = useFetch("https://api.itbook.store/1.0/new");

  useEffect(() => {
    setBooks(data.books);
  }, [data]);

  return (
    <BooksForUContext.Provider value={{ books, setBooks, loading, data }}>
      {children}
    </BooksForUContext.Provider>
  );
};

export default BooksForUProvider;
