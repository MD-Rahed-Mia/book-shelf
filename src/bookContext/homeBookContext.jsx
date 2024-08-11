import { createContext, useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";

export const HomeBooksContext = createContext(null);

const HomeBooksProvider = ({ children }) => {
  const [books, setBooks] = useState(null);
  const { data, loading } = useFetch("https://api.itbook.store/1.0/new");

  useEffect(() => {
    setBooks(data.books);
  }, [data]);

  return (
    <HomeBooksContext.Provider value={{ books, setBooks, loading, data }}>
      {children}
    </HomeBooksContext.Provider>
  );
};

export default HomeBooksProvider;
