import React from 'react';
import styles from './Title.module.scss';
import { useSelector } from 'react-redux';

type TDataUSer = Record<string, string>;

const Title = () => {
    const user = useSelector(value => value) as TDataUSer;
    return (
        <h1 className={styles.title}>{`Здравствуйте, ${user.name}`}</h1>
    );
};

export default Title;