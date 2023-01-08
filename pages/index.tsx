import Head from 'next/head'
import React, { ReactElement } from 'react'
import { Post } from '../context/PostContext';
import { getPosts } from '../context/DataHelper';
import Layout from '../components/Layout';
import IndexTemplate from '../templates';
import { useState, useEffect, useContext } from 'react';
import { Config } from '../context/Config';

const Home = () => {
  const [posts, setPosts] = useState(Array<Post>);
  const [isLoading, setLoading] = useState(false);
  const config = useContext(Config);

  useEffect(() => {
    setLoading(true)
    getPosts()
      .then(function (response) {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (!config) return;
  if (!posts) return;

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexTemplate posts={posts} isLoading={isLoading} />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;
