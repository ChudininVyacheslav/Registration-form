import React from 'react';
import styles from './ButtonSubmit.module.scss';
import { IProps } from './interfaces';
import ButtonEnter from '../ButtonEnter/ButtonEnter';

const ButtonSubmit: React.FC<IProps> = ({ disabled, isOpend, onModalClose, onClick }) => {
    return (
        <div>
            <div className={styles[`modal__wrapper-${isOpend ? 'open' : 'close'}`]}>

                <div className={styles['modal__body']}>
                    <div className={styles['modal__close']} onClick={onModalClose}>&times;</div>
                    <h2>Вы успешно зарегистрировались, перейдите на страницу входа</h2>
                    <ButtonEnter />
                </div>
            </div>
            <button
                className={styles.button}
                disabled={disabled}
                onClick={onClick}
                type='submit'>
                Зарегистрироваться
            </button>

        </div>
    );
};

export default ButtonSubmit;