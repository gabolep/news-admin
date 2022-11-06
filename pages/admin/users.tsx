import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout.js";
import Header from "../../components/Header.js";

const users = () => {
  return (
    <div>
      <Head>
        <title>Administracion Personal</title>
      </Head>
      <div className="">
        <Header>Centro de Administracion</Header>
        <Layout>Personal</Layout>
      </div>
    </div>
  );
};

export default users;
