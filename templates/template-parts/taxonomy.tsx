import { NextPage } from "next";
import Link from "next/link";
import { upload_url } from "../../context/Helper";
import { SingleProps } from "../../context/Props";

const TaxonomyTemplate: NextPage<SingleProps> = (props) => {
    const { post } = props;

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <h1><Link href={post.url}>{post.title}</Link></h1>

                        <img src={upload_url(post?.thumbnail)} alt="" className="w-100" />

                        <div 
                            id="blog-content" 
                            dangerouslySetInnerHTML={{ __html: post.content || '' }}>

                        </div>
                    </div>

                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </>
    );
}

export default TaxonomyTemplate;