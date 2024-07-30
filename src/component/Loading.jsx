import React from "react";

export default function Loading() {
  return (
    <div className="min-w-[300px] min-h-[200px] flex items-center justify-center">
      <img
        src="/images/loading.gif"
        alt="loading"
        className="block mx-auto max-w-20"
      />
    </div>
  );
}
