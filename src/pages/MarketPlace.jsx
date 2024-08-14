import React, { useContext, useEffect, useState } from "react";
import Layout from "./layout";
import BookCard from "../component/bookCard";
import LoadingSpinner from "../component/LoadingSpinner";
import FilterMarketPlace from "../component/FilterMarketPlace";
import { BooksForUContext } from "../bookContext/BooksForUContext";
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
          {/* <div>
            <SearchBar />
          </div> */}

          <div>
            <h1 className="text-xl my-4 text-[#4f6d7a] font-bold">
              Ending soon....
            </h1>
            <EndingSoon />
          </div>
          <div>
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
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-5">
        <BookCard />
        <BookCard />
      </div>
    </>
  );
};

const BooksForU = () => {
  const { books, loading } = useContext(BooksForUContext);
  return (
    <>
      {loading && (
        <div className="w-[300px] h-[300px] mx-auto">
          <LoadingSpinner />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-items-center gap-y-5">
        {books?.map((book, index) => (
          <BookCard book={book} key={index} loading={loading} />
        ))}
      </div>
    </>
  );
};
