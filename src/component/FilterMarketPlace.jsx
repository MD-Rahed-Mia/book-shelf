import React from "react";

export default function FilterMarketPlace() {
  return (
    <div>
      <ul className="w-full  flex items-center gap-2 justify-center mt-12 flex-wrap ">
        <li className="px-3 border  cursor-pointer rounded-md min-w-32 text-center py-2 transition-all hover:bg-slate-300">
          writer
        </li>
        <li className="px-3 border  cursor-pointer rounded-md min-w-32 text-center py-2 transition-all hover:bg-slate-300">
          Publication
        </li>
        <li className="px-3 border  cursor-pointer rounded-md min-w-32 text-center py-2 transition-all hover:bg-slate-300">
          Popularity
        </li>
        <li className="px-3 border  cursor-pointer rounded-md min-w-32 text-center py-2 transition-all hover:bg-slate-300">
          History
        </li>
        <li className="px-3 border  cursor-pointer rounded-md min-w-32 text-center py-2 transition-all hover:bg-slate-300">
          Thriller
        </li>
        <li className="px-3 border  cursor-pointer rounded-md min-w-32 text-center py-2 transition-all hover:bg-slate-300">
          Biographic
        </li>
      </ul>
    </div>
  );
}
