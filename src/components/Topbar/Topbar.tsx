import React from 'react';
import styles from './Topbar.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearUser} from "../../redux/auth/slice.ts";
import {selectUser} from "../../redux/auth/selectors.ts";

const Topbar: React.FC = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(clearUser());
        navigate('/signin');
    };

    return (
        <div className={styles.topbar}>
            <div>
                <NavLink to="/" className={styles.logo} >Best App</NavLink>
            </div>
            <div>
                {user ? (
                    <button onClick={handleLogout} className={styles.logoutButton}>Log Out</button>
                ) : (
                    <NavLink to="/signin" className={styles.loginButton}>Sign In</NavLink>
                )}
            </div>
        </div>
    );
};

export default Topbar;
