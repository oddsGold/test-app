import React from "react";
import {useGetPostsQuery} from "../../redux/posts/postApiSlice.ts";
import styles from "./Post.module.css";
import {NavLink} from "react-router-dom";

const Post: React.FC = () => {
    const {data: posts, error, isLoading} = useGetPostsQuery();


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error occurred: {error.message}</p>;

    return (
        <div className={styles.gridContainer}>
            {posts && posts.length > 0 ? (
                <div className={styles.grid}>
                    {posts.map(post => (
                        <NavLink  to={`/posts/${post.id}/comments`} state={{ post }}  key={post.id} className={styles.gridItem}>
                            <img src="https://via.placeholder.com/200x100" alt={post.title} className={styles.image} />
                            <h2 className={styles.title}>{post.title}</h2>
                            <p className={styles.content}>{post.body}</p>
                        </NavLink>
                    ))}
                </div>
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    )
}

export default Post;