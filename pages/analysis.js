import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

const DataAnalysis = () => {
  const router = useRouter();
  return (
    <header id="dataAnalysis" className="text-center w-96 mx-auto">
      <Head>
        <title>Analysis Page</title>
      </Head>

      <Image src="/codding.jpg" width="300" height="200" alt="data" />
      <div className="header_content my-4">
        <h2 className="font-bold text-indigo-700 hover:text-purple-800">
          Data Analysis
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste
          eaque totam, molestiae asperiores omnis maiores distinctio voluptate
          aperiam provident!
        </p>
        <button
          style={{ color: "red" }}
          className="mt-5 font-bold capitalize text-xl"
          onClick={() => router.push("/")}
        >
          Back
        </button>
      </div>
    </header>
  );
};

export default DataAnalysis;
