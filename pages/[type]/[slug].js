import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import { getPostBySlug } from '../../context/DataHelper';
import SingleTemplate from '../../templates/template-parts/single';

export default function Post() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [post, setPost] = useState(null)
  const { slug } = router.query;
  
  useEffect(() => {
    setLoading(true)
    slug ? getPostBySlug(slug)
      .then(function (response) {
        setPost(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => setLoading(false)) : null;
  }, [slug]);

  if (!post) return;

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
