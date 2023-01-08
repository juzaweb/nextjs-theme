import Link from 'next/link';
import { Key } from 'react';
import useSWR from 'swr';
import { fetcher, IndexProps, Post } from "../context/PostContext";

const TemplateIndex = () => {
    const { data, error, isLoading } = useSWR('post-type/posts?sort_by=id&sort_order=desc', fetcher);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
      <>
        <main>
        {data.data.map((item: Post, index: Key) => (
          <div key={index}>
          <h5><Link href={`post/${item.slug}`}>{item.title}</Link></h5>
        </div>
        ))}
      </main>
      </>
    )
  }

export default TemplateIndex;