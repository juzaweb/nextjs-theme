import Head from 'next/head';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(r => r.json());
const baseUrl = process.env.BASE_API_URL;

export const getServerSideProps = async(context) => {
  const { slug } = context.query;
  let post = null;
  if (process.env.SERVERSIDE_RENDING) {
    const res = await fetch(`${baseUrl}/post-type/posts/${slug}`);
    post = await res.json();
  }
  
  return { props: { post, slug } };
}

export default function Post({ post, slug }) {
  let { data, error, isLoading } = useSWR(post ? null : `${baseUrl}/post-type/posts/${slug}`, fetcher);
  if (post) data = post;
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <Head>
        <title>{data.data.title}</title>
        <meta name="description" content={data.data.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{data.data.title}</h1>
        {data.data.content}
      </main>
    </>
  )
}
