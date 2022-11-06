import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout.js";
import Header from "../../components/Header.js";

const users = () => {
  return (
    <div>
      <Head>
        <title>Administracion Juego</title>
      </Head>
      <div className="">
        <Header>Centro de Administracion</Header>
        <Layout>Juego</Layout>
      </div>
    </div>
  );
};

export default users;
