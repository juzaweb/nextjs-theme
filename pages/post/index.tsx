import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import { getPostBySlug, getPosts } from '../../context/DataHelper';
import { DefaultPost, Post } from '../../context/PostContext';
import PageTemplate from '../../templates/template-parts/single-page';
import Page404 from '../404';

export default function Posts() {
  const router = useRouter();
  const [errorCode , setErrorCode] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [post, setPost] = useState<Post>(DefaultPost);
  let { type } = router.query;
  
  useEffect(() => {
    setLoading(true)
    type ? getPostBySlug(type.toString())
      .then(function (response) {
        setPost(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        setErrorCode(404);
      })
      .finally(() => setLoading(false)) : null;
  }, [type]);

  if (!post) return;

  if (errorCode == 404) {
    return <Page404 />;
  }

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <PageTemplate post={post} isLoading={isLoading} />
    </Layout>
  )
}
