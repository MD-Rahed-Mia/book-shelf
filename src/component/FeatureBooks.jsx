import React from "react";
import BookCard from "./bookCard";

export default function FeatureBooks() {
  return (
    <div className="w-[80%] mx-auto mt-5">
      <h1>feature books for home</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center xl:grid-cols-4">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}
