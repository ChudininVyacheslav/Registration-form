import React from 'react';
import styles from './ButtonSubmit.module.scss';
import { IProps } from './interfaces';

const ButtonSubmit: React.FC<IProps> = ({ disabled, active, setActive }) => {
    return (
        <div className={active ? styles['modal-active'] : styles['modal']}
            onClick={() => {
                setActive(false)
            }}
        >
            <div
                className={styles['modal-content']}
            >
                <p>asdddddddasdas</p>
            <button
                className={styles.button}
                disabled={disabled}
                onClick={() => {
                    console.log(1)
                    setActive(true)
                } }
                type='submit'>
                Зарегистрироваться
            </button>
            </div>
        </div>
    );
};

export default ButtonSubmit;