import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout.js";
import Header from "../../components/Header.js";

const dictionary = () => {
  return (
    <div>
      <Head>
        <title>Administracion Diccionario</title>
      </Head>
      <div className="">
        <Header>Centro de Administracion</Header>
        <Layout>Diccionario</Layout>
      </div>
    </div>
  );
};

export default dictionary;
