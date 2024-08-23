import React, { useState } from 'react';
import styles from './Login.module.css';
import { useDispatch } from "react-redux";
import { useGetUserMutation } from "../../redux/auth/authApiSlice.ts";
import { setUser } from "../../redux/auth/slice.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [getUser, { isLoading, isError }] = useGetUserMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userResponse = await getUser(username).unwrap();

            if (userResponse.length > 0) {
                dispatch(setUser(userResponse));
                navigate('/');
            } else {
                toast.error("User not found");
            }
        } catch (error) {
            if (isError) {
                toast.error("An error occurred");
            }
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Sign In</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Username"
                />
                <button type="submit" className={styles.button} disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default Login;
