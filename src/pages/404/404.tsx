import React from 'react';
import style from './404.module.css';
import {NavLink} from "react-router-dom";

const PageNotFound: React.FC = () => {
    return (
        <div id="wrapper">
            <section className={style.errorContainer}>
                <span className={style.four}><span className={style.screenReaderText}>4</span></span>
                <span className={style.zero}><span className={style.screenReaderText}>0</span></span>
                <span className={style.four}><span className={style.screenReaderText}>4</span></span>
            </section>
            <section className={style.errorContainer}>
                <NavLink to="/" className={style.moreLink}>Go HOME</NavLink>
            </section>
        </div>
    );
};

export default PageNotFound;
