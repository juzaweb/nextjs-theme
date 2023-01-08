import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import { getPostBySlug } from '../../context/DataHelper';
import SingleTemplate from '../../templates/template-parts/single';
import { DefaultPost, Post } from '../../context/PostContext';
import Page404 from '../404';

export default function PostDetail() {
  const router = useRouter();
  const [errorCode , setErrorCode] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [post, setPost] = useState<Post>(DefaultPost)
  let { slug } = router.query;
  
  useEffect(() => {
    setLoading(true)
    slug ? getPostBySlug(slug.toString())
      .then(function (response) {
        setPost(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        setErrorCode(404);
      })
      .finally(() => setLoading(false)) : null;
  }, [slug]);

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
      
      <SingleTemplate post={post} isLoading={isLoading} />
    </Layout>
  )
}
