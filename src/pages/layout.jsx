import React from "react";
import Nav from "../component/nav";
import Footer from "../component/Footer";
import Cart from "../component/Cart";
import ChatBox from "../component/ChatBox";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}

      <ChatBox />
      <Footer />
    </div>
  );
}
