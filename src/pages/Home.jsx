import React, { useEffect, useState } from "react";
import Nav from "../component/nav";
import Banner from "../component/banner";
import SearchBar from "../component/searchBar";
import SubCategory from "../component/subCategory";
import BookCard from "../component/bookCard";
import Layout from "./layout";
import FeatureBooks from "../component/FeatureBooks";
import Cart from "../component/Cart";
import BookShelf from "../component/BookShelf";
import useFetch from "../customHooks/useFetch";
import OfferForU from "../component/OfferForU";

export default function Home() {
  const [bestSeller, setBestSEller] = useState(null);
  const [bookOfWeek, setBooksOfweek] = useState(null);

  const { data, loading } = useFetch("https://freetestapi.com/api/v1/books?limit=7");

  useEffect(() => {
    if (data) {
      setBestSEller(data)
    }
  }, [data]);

  return (
    <div>
      <Layout>
        <Banner />
        <Cart />
        <SearchBar />
        <SubCategory />
        <FeatureBooks />
        <BookShelf title={"Top seller"} books={bestSeller} loading={loading} />
        <OfferForU />
      </Layout>
    </div>
  );
}
