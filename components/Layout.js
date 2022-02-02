import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "90vh",
          justifyContent: "center",
        }}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
