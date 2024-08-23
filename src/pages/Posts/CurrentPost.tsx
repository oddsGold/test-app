import React, {FC, useRef} from "react";
import {NavLink, useLocation, useNavigate, useParams} from "react-router-dom";
import { useGetCurrentPostQuery } from "../../redux/posts/postApiSlice.ts";
import styles from './Comments.module.css';
import post from "./Post.module.css";


interface LocationState {
    post: {
        id: number;
        title: string;
        body: string;
    };
}

const CurrentPost: FC = () => {
    const location = useLocation();
    const state = location.state as LocationState;
    const { id } = useParams();

    const { data: comments, error, isLoading } = useGetCurrentPostQuery(id as string);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error occurred: {error.message}</p>;

    return (
        <div className={styles.commentsContainer}>
            {state?.post && (
                <div className={post.currentPost}>
                    <h2 className={post.title}>{state.post.title}</h2>
                    <p className={post.content}>{state.post.body}</p>
                </div>
            )}
            {comments && comments.length > 0 ? (
                <ul className={styles.commentsList}>
                    <p>Comments:</p>
                    {comments.map(comment => (
                        <li key={comment.id} className={styles.commentItem}>
                            <h3 className={styles.commentName}>{comment.name}</h3>
                            <p className={styles.commentEmail}>{comment.email}</p>
                            <p className={styles.commentBody}>{comment.body}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No comments available.</p>
            )}
        </div>
    );
}

export default CurrentPost;
