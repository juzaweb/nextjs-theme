import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import { getPostBySlug, getPostComments } from '../../context/DataHelper';
import SingleTemplate from '../../templates/template-parts/single';
import { Comment, DefaultPost, Post } from '../../context/PostContext';
import Page404 from '../404';

export default function PostDetail() {
  const router = useRouter();
  const [errorCode , setErrorCode] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [isCommentLoading, setCommentLoading] = useState(false);
  const [post, setPost] = useState<Post>(DefaultPost)
  const [comments, setComments] = useState(Array<Comment>)
  const { slug } = router.query;
  
  useEffect(() => {
    setLoading(true)
    
    if (slug) {
      getPostBySlug(slug.toString())
        .then(function (response) {
          setPost(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          setErrorCode(404);
        });

      getPostComments(slug.toString())
        .then(function (response) {
          setComments(response.data);
          setCommentLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(() => setCommentLoading(false))
    }

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
      
      <SingleTemplate 
        post={post} 
        isLoading={isLoading} 
        comments={comments} 
        isCommentLoading={isCommentLoading}
      />
    </Layout>
  )
}
