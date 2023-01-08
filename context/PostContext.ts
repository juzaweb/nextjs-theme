//import axios from 'axios'

export type PostMeta = {
    meta_key: string
    meta_value?: string
}

export type Post = {
    id: string
    title: string
    slug: string
    url: string
    thumbnail: string
    description: string
    metas?: Array<PostMeta>
    content?: string
}

//export const fetcher = (url: string) => axios.get(url).then(res => res.data)

export interface IndexProps {
    posts: Array<Post>
    isLoading: boolean
}

export interface SingleProps {
    post: Post
    isLoading: boolean
}
