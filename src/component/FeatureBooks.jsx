import React, { useContext, useEffect, useState } from "react";
import BookCard from "./bookCard";
import useFetch from "../customHooks/useFetch";
import LoadingSpinner from "../component/LoadingSpinner";
import { HomeBooksContext } from "../bookContext/homeBookContext";

export default function FeatureBooks() {
  const [books, setBooks] = useState(null);
  // const { data, loading } = useFetch("https://api.itbook.store/1.0/new");
  const { data, loading } = useFetch("https://freetestapi.com/api/v1/books?limit=3");



  useEffect(() => {
    if (data) {
      setBooks(data);
    }
  }, [data]);
  return (
    <div className="w-[80%] mx-auto mt-5">
      {loading && (
        <div className="w-[300px] h-[300px] mx-auto">
          <LoadingSpinner />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center xl:grid-cols-4">
        {books?.map((book, index) => {
          return index > 11 ? "" : <BookCard book={book} key={index} />;
        })}
      </div>
    </div>
  );
}
