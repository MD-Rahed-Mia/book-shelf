import React from "react";

export default function Banner() {
  return (
    <div
      className="w-full flex items-center justify-center mt-5 object-cover  mx-auto"
      data-aos="zoom-in"
    >
      <img
        src="/images/heroBanner.jpg"
        className="w-4/5 h-[500px]"
        alt="banner"
      />
    </div>
  );
}
