import axios from 'axios'

export type IndexProps = {
    meta_key: string
    meta_value?: string
}

export type PostMeta = {
    meta_key: string
    meta_value?: string
}

export type Post = {
    id: Number
    title: string
    slug: string
    description: string
    metas?: Array<PostMeta>
    content?: string
}

export const fetcher = (url: string) => axios.get(url).then(res => res.data)
