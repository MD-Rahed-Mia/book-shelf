import React, { useContext } from "react";
import Nav from "../component/nav";
import Footer from "../component/Footer";
import Cart from "../component/Cart";
import ChatBox from "../component/ChatBox";
import Toast from "../Toast/Toast";
import { IsLoggedIn } from "../AuthContext/IsLoggedIn";

export default function Layout({ children }) {

  const { getUser } = useContext(IsLoggedIn)
  return (
    <div>
      <Nav />

      {
        getUser.email !== undefined ? <Cart /> : ""
      }
      {children}

      <ChatBox />
      <Footer />
    </div>
  );
}
