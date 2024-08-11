import React, { useContext, useEffect, useState } from "react";
import Layout from "./layout";
import { FaPencil } from "react-icons/fa6";
import { FaMailBulk, FaMap } from "react-icons/fa";
import { IsLoggedIn } from "../AuthContext/IsLoggedIn";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { getUser } = useContext(IsLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (getUser?.email == undefined) {
      navigate("/login");
    }
  }, [getUser]);
  return (
    <>
      <Layout>
        <div className="w-full px-3 md:w-[80%] mx-auto">
          <ProfileBanner />
          <PersonalDetails />
          <ProfileNavigation />
        </div>
      </Layout>
    </>
  );
}

const ProfileBanner = () => {
  return (
    <>
      <div className="mx-auto mt-3 object-cover" data-aos="zoom-in">
        <img
          src="/images/profileBanner.jpg"
          alt="profile banner"
          className="w-full h-full"
        />
      </div>
    </>
  );
};

const PersonalDetails = () => {
  return (
    <>
      <div
        className="w-20 mt-10 h-20  md:w-30 md:h-30 rounded-full overflow-hidden object-cover border-2 border-red-500"
        data-aos="zoom-out"
      >
        <img src="/images/profile.jpg" alt="profile" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 place-content-center mt-2 gap-3 md:gap-0 text-[#5e7a85]">
        <div>
          <h1 className="text-2xl">Profile name here</h1>
          <h1 className="flex items-center gap-2 cursor-pointer">
            edit profile
            <span>
              <FaPencil />
            </span>
          </h1>
        </div>
        <div>
          <h1 className="flex items-center gap-2">
            <FaMailBulk /> mdrahed@gmail.com
          </h1>
          <h1>0125323r345</h1>
        </div>
        <div>
          <h1 className="flex items-center gap-2">
            <FaMap /> 23 Shitol Jorna R/A, Baizid bostami, Chattogram.
          </h1>
        </div>
      </div>
    </>
  );
};

const ProfileNavigation = () => {
  const [selectedNav, setSelectedNav] = useState(
    localStorage.getItem("profileTab") || "dashboard"
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center mt-5">
        <div
          className="w-full text-center"
          onClick={() => {
            setSelectedNav("dashboard");
            localStorage.setItem("profileTab", "dashboard");
          }}
        >
          <p
            className={
              selectedNav == "dashboard"
                ? "w-full bg-green-400 py-2 text-white"
                : "w-full border-b-2  py-2 cursor-pointer"
            }
          >
            Dashboard
          </p>
        </div>

        <div
          className="w-full text-center"
          onClick={() => {
            setSelectedNav("purchaseHistory");
            localStorage.setItem("profileTab", "purchaseHistory");
          }}
        >
          <p
            className={
              selectedNav == "purchaseHistory"
                ? "w-full bg-green-400 py-2 text-white"
                : "w-full border-b-2 py-2 cursor-pointer"
            }
          >
            Purchase History
          </p>
        </div>
        <div
          className="w-full text-center"
          onClick={() => {
            setSelectedNav("settings");
            localStorage.setItem("profileTab", "settings");
          }}
        >
          <p
            className={
              selectedNav == "settings"
                ? "w-full bg-green-400 py-2 text-white"
                : "w-full border-b-2 py-2 cursor-pointer"
            }
          >
            Settings
          </p>
        </div>
      </div>

      <div className="min-h-40 mt-5 w-full">
        {selectedNav == "dashboard" ? <DashBoardContent /> : ""}
        {selectedNav == "purchaseHistory" ? <PurchaseHistoryContent /> : ""}
        {selectedNav == "settings" ? <SettingsContent /> : ""}
      </div>
    </>
  );
};

const DashBoardContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
      <DashBoardCard />
      <DashBoardCard />
      <DashBoardCard />
    </div>
  );
};

const DashBoardCard = () => {
  return (
    <>
      <div
        className="w-[250px] min-h-52 shadow-sm border-none rounded-lg shadow-black grid grid-cols-1"
        data-aos="fade-up"
      >
        <div className="bg-orange-200 flex items-center flex-col justify-center">
          <h1 className="text-xl">Sales</h1>
          <h1 className="text-3xl">4</h1>
        </div>
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-sm text-orange-500">add a book for sale</h1>
          <button className="px-3 py-1 bg-orange-500 text-white min-w-24 rounded-lg cursor-pointer mt-3">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

const PurchaseHistoryContent = () => {
  return (
    <>
      <h1>history</h1>
    </>
  );
};

const SettingsContent = () => {
  return (
    <div>
      <h1>Change password</h1>
      <form action="">
        <div>
          <input
            type="password"
            name="oldPassword"
            id="oldPassword"
            placeholder="old password"
            className="border-2 border-orange-500 px-2 py-1  mt-3 rounded-md shadow-md text-sm outline-none "
          />
        </div>
        <div>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="new password"
            className="border-2 border-orange-500 px-2 py-1  mt-3 rounded-md shadow-md text-sm outline-none "
          />
        </div>
        <div>
          <input
            type="password"
            name="confirmPassowrd"
            id="confirmPassowrd"
            placeholder="confirm password"
            className="border-2 border-orange-500 px-2 py-1  mt-3 rounded-md shadow-md text-sm outline-none "
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-2 py-1 bg-orange-500 text-white mt-3 block outline-none border-none rounded-md cursor-pointer"
          >
            change password
          </button>
        </div>
      </form>
    </div>
  );
};
