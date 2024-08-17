import React, { useEffect, useState } from "react";

const Message = (m) => {
  return m;
};

export default function Toast() {
  const [message, setMessage] = useState(Message());

  useEffect(() => {
    setMessage(() => Message());
  }, [Message]);

  return (
    <div className="absolute top-24 right-4 bg-white border-2 min-h-[50px] min-w-[200px] z-50">
      <h1 className="text-center text-blue-500">{message}</h1>
    </div>
  );
}

export { Message };
