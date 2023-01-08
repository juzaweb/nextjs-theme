import Head from 'next/head';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const fetcher = url => fetch(url).then(r => r.json());
const baseUrl = process.env.BASE_API_URL;

// export const getServerSideProps = async(context) => {
//   const { slug } = context.query;
//   let post = null;
//   if (process.env.SERVERSIDE_RENDING) {
//     const res = await fetch(`${baseUrl}/post-type/posts/${slug}`);
//     post = await res.json();
//   }
//   return { props: { post, slug } };
// }

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, isLoading } = useSWR(slug ? `${baseUrl}/post-type/posts/${slug}` :  null, fetcher);

  if (error) return <div>failed to load</div>
  if (isLoading || !data) return <div>loading...</div>

  return (
    <Layout>
      <Head>
        <title>{data.data.title}</title>
        <meta name="description" content={data.data.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{data.data.title}</h1>
        {data.data.content}
      </main>
    </Layout>
  )
}
