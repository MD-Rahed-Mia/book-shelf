import React from "react";
import Nav from "../component/nav";
import Banner from "../component/banner";
import SearchBar from "../component/searchBar";
import SubCategory from "../component/subCategory";
import BookCard from "../component/bookCard";
import Layout from "./layout";
import FeatureBooks from "../component/FeatureBooks";

export default function Home() {
  return (
    <div>
      <Layout>
        <Banner />
        <SearchBar />
        <SubCategory />
        <FeatureBooks />
      </Layout>
    </div>
  );
}
