import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Loading from "./Loading";
export default function BookCard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
setTimeout(() => {
  setLoading(false)
}, 1500)
  }, [])
  return (
    <>
      {loading ? (
        <div className="shadow-lg min-w-48">
          <Loading />
        </div>
      ) : (
        <>
          <div className="shadow-md -shadow-md max-w-[350px] grid grid-cols-2 rounded-md">
            <div>
              <img src="https://placehold.jp/150x200.png" alt="book card" />
            </div>
            <div>
              <ul className="flex items-center justify-center gap-2 mt-2">
                <RatingBar rating={3} />
              </ul>
              <div className="text-center">
                <h1 className="text-lg mt-3 leading-5">
                  Sharlok Homes wedding books
                </h1>
                <h1 className="text-sm">Sharloks home</h1>
              </div>
              <div>
                <h1 className="text-xl text-center text-[#bf5a36]">BDT 120</h1>
                <button className="block mx-auto text-center border-2 border-[#bf5a36] rounded-sm px-3 mt-3 py-1 hover:bg-[#bf5a36] hover:text-white transition">
                  Buy now
                </button>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
}

//books rating bar
const RatingBar = ({ rating = 4 }) => {
  const ratingStar = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      ratingStar.push(<FaStar className="text-yellow-400" />);
    } else {
      ratingStar.push(<FaRegStar className="text-gray-400" />);
    }
  }
  return (
    <>
      {ratingStar &&
        ratingStar.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
    </>
  );
};
