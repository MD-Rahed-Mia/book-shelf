import React from "react";
import Layout from "./layout";

export default function NoPage() {
  return (
    <>
      <Layout>
        <div className="text-4xl flex items-center justify-center flex-wrap flex-col">
          <h1>Invalid Request</h1>
          <h1>404!Error</h1>
        </div>
      </Layout>
    </>
  );
}
