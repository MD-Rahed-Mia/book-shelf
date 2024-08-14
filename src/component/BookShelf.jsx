import React, { useState } from "react";
import BookCard from "./bookCard";
import LoadingSpinner from "./LoadingSpinner";
export default function BookShelf({ title, books, limit, loading = true }) {
  return (
    <div className="py-6 w-full md:w-4/5 mx-auto my-12 p-2 border-2 shadow-md">
      <h1 className="text-2xl text-slate-400">{title}</h1>

      {loading && (
        <div>
          <LoadingSpinner />
        </div>
      )}

      {
        // bangladesh
      }

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 py-4 scrollbar-hidden">
        <BookCard />
        <BookCard />
        <BookCard />
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
