import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useGetCurrentPostQuery } from '../../redux/posts/postApiSlice.ts';
import styles from './Comments.module.css';
import post from './Post.module.css';
import Loader from '../../components/Loader/Loader.tsx';

interface LocationState {
    post: {
        id: number;
        title: string;
        body: string;
    };
}

const CurrentPost: React.FC = () => {
    const location = useLocation();
    const state = location.state as LocationState;
    const { id } = useParams();

    const { data: comments, isLoading } = useGetCurrentPostQuery(id as string);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={styles.commentsContainer}>
            {state?.post && (
                <div className={post.currentPost}>
                    <h2 className={post.title}>{state.post.title}</h2>
                    <p className={post.content}>{state.post.body}</p>
                </div>
            )}

            <div>
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
        </div>
    );
};

export default CurrentPost;
