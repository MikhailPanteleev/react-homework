import React from 'react';
import { Link } from "react-router-dom";
import { ROUTES } from '../../../../routes/routeNames';

import styles from './style.module.scss';

const HomeLayout = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to={ROUTES.COUNTER_PAGE} className={styles.link}>
               <button className={styles.counterPageLink}>Counter Page</button>
            </Link>
        </div>
    );
};

export default HomeLayout;