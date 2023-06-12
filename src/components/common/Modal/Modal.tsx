import React from 'react'
import styles from './Modal.module.scss';

export interface IProps {
    isOpend: boolean;
    onModalClose: () => void;
    children?: React.ReactNode;
};

const Modal: React.FC<IProps> = ({ isOpend, onModalClose }) => {
    return (
        <div className={`${styles.modal} ${isOpend ? styles['modal_opened'] : ''}`}>
            <div className={styles['modal__body']}>
                <div className={styles['modal__close']} onClick={onModalClose}>&times;</div>
                <div>Вы успешно зарегистрировались, перейдите на страницу входа</div>
            </div>
        </div>
    )
}

export default Modal