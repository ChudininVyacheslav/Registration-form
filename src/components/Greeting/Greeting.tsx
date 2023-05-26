import React from 'react';
import styles from './Greeting.module.scss';
import Title from './Title/Title';

const Greeting = () => {
    return (
        <div className={styles.container}>
            <Title />
        </div>
    );
};

export default Greeting;