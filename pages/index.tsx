import Head from "next/head";
import Header from "../components/Header.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portal de Noticias</title>
      </Head>
      <div className="">
        <Header>Portal de Noticias</Header>
      </div>
    </div>
  );
}
