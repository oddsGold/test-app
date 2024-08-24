import React from "react";
import { useGetPostsQuery } from "../../redux/posts/postApiSlice.ts";
import styles from "./Post.module.css";
import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader/Loader.tsx";
import {Post} from "../../redux/posts/post.type.ts";

const PostComponent: React.FC = () => {
    const { data: posts, isLoading } = useGetPostsQuery();

    if (isLoading) {
        return <Loader />;
    }

    if (!posts || posts.length === 0) {
        return <p>No posts available.</p>;
    }

    return (
        <div className={styles.gridContainer}>
            <div className={styles.grid}>
                {posts.map((post: Post) => (
                    <NavLink
                        to={`/posts/${post.id}/comments`}
                        state={{ post }}
                        key={post.id}
                        className={styles.gridItem}
                    >
                        <img src="https://via.placeholder.com/200x100" alt={post.title} className={styles.image} />
                        <h2 className={styles.title}>{post.title}</h2>
                        <p className={styles.content}>{post.body}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default PostComponent;
