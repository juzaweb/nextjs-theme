import { NextPage } from "next";
import { __ } from "../../context/Helper";
import { CommentProps } from "../../context/Props";

const CommentComponentTemplate: NextPage<CommentProps> = (props) => {
    const { total, comments } = props;
    if (!props.support) {
        return <></>;
    }

    return (
        <>
            <h3 className="comments-title">{total.toString()} {__('Comments')}:</h3>

            <ol className="comment-list">
            {comments?.map((item, index) => (
                <li className="comment" key={item.id}>
                    <aside className="comment-body">
                        <div className="comment-meta">
                            <div className="comment-author vcard">
                                <img src="{ comment.avatar }" className="avatar" alt="image" />
                                <b className="fn">{ item.name }</b>
                                <span className="says">{ __('says') }:</span>
                            </div>

                            <div className="comment-metadata">
                                <a href="#">
                                    <span>{ item.created_at }</span>
                                </a>
                            </div>
                        </div>

                        <div className="comment-content">
                            { item.content }
                        </div>

                        <div className="reply">
                            <a href={`?reply=${item.id}#comment-form`} className="comment-reply-link">{ __('Reply') }</a>
                        </div>
                    </aside>
                </li>
            ))}
            </ol>
        </>
    );
}

export default CommentComponentTemplate;