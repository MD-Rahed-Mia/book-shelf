import React, { useContext, useEffect, useState } from "react";
import { FaCartArrowDown, FaCross, FaDeleteLeft } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { IsLoggedIn } from "../AuthContext/IsLoggedIn";

export default function Cart() {
  const [cartOpen, setCartOpen] = useState(false);
  const { getUser } = useContext(IsLoggedIn);

  useEffect(() => {
    if (getUser) {
      console.log(getUser);
    }
  }, []);

  function handleCartDetail() {
    setCartOpen(!cartOpen);
  }
  return (
    <div>
      {getUser.email && (
        <div
          className="fixed bottom-4 left-8 right-3 text-2xl  cursor-pointer translate-y-1/2 h-12 w-12 rounded-full bg-blue-400 flex items-center justify-center text-white transition z-50"
          data-aos="fade-in"  
          onClick={handleCartDetail}
        >
          <div
            className={
              cartOpen
                ? "transition-transform duration-300 transform animation-spin-infinite"
                : "transition-transform duration-300 transform animation-spin "
            }
          >
            {cartOpen ? <RxCross1 /> : <FaCartArrowDown />}
          </div>
        </div>
      )}

      {cartOpen ? (
        <CartDetail cartOpen={cartOpen} setCartOpen={setCartOpen} />
      ) : (
        ""
      )}
    </div>
  );
}

const CartDetail = ({ cartOpen, setCartOpen }) => {
  const { getUser } = useContext(IsLoggedIn);
  return (
    <div className="w-[100vw] min-h-[100vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg p-4 flex items-center  justify-center  bg-[rgba(0,0,0,0.5)] border z-[1]">
      {getUser.email == undefined ? <h1>Please logging first</h1> : ""}

      <div className=" overflow-auto mx-auto min-h-[500px] py-4 border bg-white rounded-lg relative">
        <div>
          <h1 className="ps-5 text-2xl md:text-4xl text-center my-5 text-blue-500">
            Books you have choose to buy
          </h1>
        </div>
        <table className="w-4/5 mx-auto mt-3">
          <thead>
            <tr className="">
              <td className="border text-center py-2 px-2 text-[12px] md:text-md capitalize text-slate-700">
                Books details
              </td>
              <td className="border text-center py-2 px-2 text-[12px] md:text-md  capitalize text-slate-700">
                quantity
              </td>
              <td className="border text-center py-2 px-2 text-[12px] md:text-md  capitalize text-slate-700">
                Price
              </td>
              <td className="border text-center py-2 px-2 text-[12px] md:text-md  capitalize text-slate-700">
                Sub total
              </td>
              <td className="border text-center py-2 px-2 text-[12px] md:text-md  capitalize text-slate-700">
                <span>Action</span>
              </td>
            </tr>
          </thead>
          <tbody>
            <CartItem />
            <CartItem />
          </tbody>
        </table>

        <div>
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

const CartItem = () => {
  return (
    <tr className="">
      <td className="border text-center py-2 px-2 text-md capitalize text-slate-700 bg-white">
        <div className="flex items-center flex-col md:flex-row gap-2">
          <span>
            <img
              src="/images/profile.jpg"
              alt=""
              className="max-w-7 rounded-full"
            />
          </span>
          <span>
            <h1 className="text-[10px] md:text-lg">Times management</h1>
            <h4 className="text-[10px] md:text-[10px]">brian tracy</h4>
          </span>
        </div>
      </td>
      <td className="border text-center py-2 px-2 text-md capitalize text-slate-700">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <button className="w-12 border-none outline-none text-lg px-2 bg-blue-500 flex items-center justify-center rounded-md text-white cursor-pointer">
            -
          </button>
          <p>1</p>
          <button className="w-12  border-none outline-none text-lg px-2 bg-blue-500 flex items-center justify-center rounded-md text-white cursor-pointer">
            +
          </button>
        </div>
      </td>
      <td className="border text-center py-2 px-2 text-sm capitalize text-slate-700">
        BDT 120
      </td>
      <td className="border text-center py-2 px-2 text-sm capitalize text-slate-700">
        BDT 120
      </td>
      <td className="border text-center py-2 px-2 text-xl capitalize text-slate-700">
        <div className="block mx-auto w-12 cursor-pointer hover:text-orange-500 transition">
          <FaDeleteLeft />
        </div>
      </td>
    </tr>
  );
};

const CartTotal = () => {
  return (
    <div className="absolute mt-5 w-3/5 ms-[30%]">
      <div className="mt-3">
        <span className="text-sm flex items-center justify-between text-slate-400">
          Total books value<span className="text-end">BDT 240</span>
        </span>
        <hr className="border border-dashed  text-black" />
      </div>
      <div className="mt-3">
        <span className="text-sm flex items-center justify-between text-slate-400">
          Delivery charge <span className="text-end">BDT 40</span>
        </span>
        <hr className="border border-dashed  text-black" />
      </div>
      <div className="mt-3">
        <span className="text-sm flex items-center justify-between text-slate-400">
          Total <span className="text-end">BDT 280</span>
        </span>
        <hr className="border border-dashed text-black" />
      </div>
    </div>
  );
};
