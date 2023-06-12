import React from 'react'
import styles from './Modal.module.scss';

export interface IProps {
    isOpend: boolean;
    children: React.ReactNode;
};

const Modal: React.FC<IProps> = ({ isOpend, children }) => {
    
    return (
        <div className={`${styles.modal} ${isOpend ? styles['modal_opened'] : ''}`}>
            <div className={styles['modal__body']}>
                <div className={styles['modal__btn']}>{children}</div>
                <h1 className={styles['modal__title']}>Вы успешно зарегистрировались, перейдите на страницу входа</h1>
            </div>
        </div>
    );
};
    
export default Modal;