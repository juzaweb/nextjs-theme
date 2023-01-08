import { NextPage } from "next";
import { upload_url } from "../../context/Helper";
import { SingleProps } from "../../context/Props";
import CommentComponentTemplate from "../components/comments";

const SingleTemplate: NextPage<SingleProps> = (props) => {
    const { post } = props;

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <h1>{post.title}</h1>

                        <div className="text-center">
                            <img src={upload_url(post?.thumbnail)} alt={post.title} className="w-75" />
                        </div>
                        
                        <div 
                            id="blog-content" 
                            dangerouslySetInnerHTML={{ __html: post.content || '' }}>

                        </div>
                    </div>

                    <div className="col-md-4">

                    </div>
                </div>

                {(props.config?.comment_support) ? (
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <CommentComponentTemplate 
                                total={post.total_comment} 
                                support={props.config?.comment_support} 
                                comments={props.comments} 
                                isLoading={props.isCommentLoading}
                            />
                        </div>
                    </div>
                ) : ''}
                
            </div>
        </>
    );
}

export default SingleTemplate;