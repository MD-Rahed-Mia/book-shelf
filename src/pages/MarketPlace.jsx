import React, { useContext, useEffect, useState } from "react";
import Layout from "./layout";
import BookCard from "../component/bookCard";
import LoadingSpinner from "../component/LoadingSpinner";
import FilterMarketPlace from "../component/FilterMarketPlace";
import { BooksForUContext } from "../bookContext/BooksForUContext";
import useFetch from "../customHooks/useFetch";
import SearchBar from "../component/searchBar";

export default function MarketPlace() {
  return (
    <>
      <Layout>
        <div className="w-[80%] mx-auto">
          <div data-aos="zoom-in">
            <img
              src="/images/marketPlaceBanner.jpg"
              alt="banner"
              className="max-h-[350px] mx-auto my-12"
            />
          </div>

          <div>
            <h1 className="text-xl my-4 text-[#4f6d7a] font-bold">
              Ending soon....
            </h1>
            <EndingSoon />
          </div>
          <div>
            <div className="mt-8">
              <SearchBar />
            </div>
            <FilterMarketPlace />
          </div>
          <div>
            <h1 className="text-xl my-4 text-[#4f6d7a] font-bold">
              Books for you...
            </h1>
            <BooksForU />
          </div>
        </div>
      </Layout>
    </>
  );
}

const EndingSoon = () => {
  const [endingSoonBooks, setEndingSoonBooks] = useState(null);
  const { loading, data } = useFetch(
    "https://freetestapi.com/api/v1/books?limit=3"
  );

  useEffect(() => {
    if (data) {
      setEndingSoonBooks(data);
    }
  }, [loading, data]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-5">
        {loading ? <LoadingSpinner /> : ""}
        {endingSoonBooks &&
          endingSoonBooks?.map((item, index) => {
            return <BookCard key={index} book={item} />;
          })}
      </div>
    </>
  );
};

const BooksForU = () => {
  const [booksForUData, setBooksForUData] = useState(null);

  const { data, loading } = useFetch(
    "https://freetestapi.com/api/v1/books?limit=30"
  );

  useEffect(() => {
    if (data) {
      setBooksForUData(data);
    }
  }, [data]);

  return (
    <>
      {loading && (
        <div className="w-[300px] h-[300px] mx-auto">
          <LoadingSpinner />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-items-center gap-y-5">
        {booksForUData?.map((book, index) => (
          <BookCard book={book} key={index} loading={loading} />
        ))}
      </div>
    </>
  );
};
