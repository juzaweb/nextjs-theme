import { Post } from "./PostContext"

export interface IndexProps {
    posts: Array<Post>
    isLoading: boolean
}

export interface SingleProps {
    post: Post
    isLoading: boolean
}

export interface Page404Props {
    message?: string
}