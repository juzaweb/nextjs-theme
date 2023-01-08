import { Post, Comment } from "./PostContext"

export interface IndexProps {
    posts: Array<Post>
    isLoading: boolean
}

export interface SingleProps {
    post: Post
    isLoading: boolean
    isCommentLoading?: boolean
    comments?: Array<Comment>
    config?: {
        comment_support?: boolean
    }
}

export interface Page404Props {
    message?: string
}

export interface CommentProps {
    comments?: Array<Comment>
    isLoading?: boolean
    support?: boolean
    total: Number
}