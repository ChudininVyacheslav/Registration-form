import React from 'react'
import styles from './Enter.module.scss';
import { Link } from "react-router-dom";

const ButtonEnter = () => {
    return (
        <button
            className={styles.button}
        >
            <Link className={styles.link} to={'/login'}>
                Войти
            </Link>
        </button>
    )
}

export default ButtonEnter