import React from "react";
import Layout from "./layout";
import BookCard from "../component/bookCard";
import SearchBar from "../component/searchBar"
export default function MarketPlace() {
  return (
    <>
      <Layout>
        <div className="w-[80%] mx-auto">

          <div>
            <SearchBar />
          </div>
          <div>
            <h1 className="text-xl my-4 text-[#4f6d7a] font-bold">
              Ending soon....
            </h1>
            <EndingSoon />
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-5">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
};
