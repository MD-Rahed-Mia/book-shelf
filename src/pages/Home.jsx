import React from "react";
import Nav from "../component/nav";
import Banner from "../component/banner";
import SearchBar from "../component/searchBar";
import SubCategory from "../component/subCategory";
import BookCard from "../component/bookCard";
import Layout from "./layout";
import FeatureBooks from "../component/FeatureBooks";
import Cart from "../component/Cart";
import BookShelf from "../component/BookShelf";

export default function Home() {
  return (
    <div>
      <Layout>
        <Banner />
        <Cart />
        <SearchBar />
        <SubCategory />
        <FeatureBooks />
        <BookShelf title={"Finding your favourite books"} />
      </Layout>
    </div>
  );
}
