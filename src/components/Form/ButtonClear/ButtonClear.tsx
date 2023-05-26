import React from 'react';
import styles from './ButtonClear.module.scss';
import { Iprops } from './interfaces';

const ButtonClear: React.FC<Iprops> = ({ onClick }) => {
    return (
        <button className={styles.button} onClick={() => { onClick() }}>
            Отчистить
        </button>
    );
};

export default ButtonClear;