import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="w-[300px] mx-auto min-h-[200px] flex items-center justify-center">
      <img
        src="/images/loading.gif"
        alt="loading"
        className="max-w-20 mx-auto"
      />
    </div>
  );
}
