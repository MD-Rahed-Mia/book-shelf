import { createContext, useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";

export const FavouriteBooksContext = createContext(null);

const FavouriteBooksProvider = ({ children }) => {
  const [books, setBooks] = useState(null);
  const { data, loading } = useFetch("https://api.itbook.store/1.0/new");

  useEffect(() => {
    setBooks(data.books);
  }, [data]);

  return (
    <FavouriteBooksProvider.Provider value={{ books, setBooks, loading, data }}>
      {children}
    </FavouriteBooksProvider.Provider>
  );
};

export default FavouriteBooksProvider;
