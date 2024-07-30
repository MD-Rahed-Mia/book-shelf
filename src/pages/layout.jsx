import React from "react";
import Nav from "../component/nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
