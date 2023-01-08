import { NextPage } from "next";
import Link from "next/link";
import { SingleProps } from "../../context/PostContext";

const SingleTemplate: NextPage<SingleProps> = (props) => {
    const { post } = props;

    return (
        <>
            <div className="row">
                <div className="col-md-8">
                    <h1>{post.title}</h1>

                    <div 
                        id="blog-content" 
                        dangerouslySetInnerHTML={{ __html: post.content || '' }}>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleTemplate;