import { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import { __ } from "../context/Helper";
import Page404Template from "../templates/404";

export default function Page404() {
  return (
    <Layout>
      <Head>
        <title>404 - Page not found</title>
        <meta name="description" content="404 - Page not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Page404Template message="404 - Page not found" />
    </Layout>
  )
}
