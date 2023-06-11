import React from 'react';
import styles from './ButtonDelete.module.scss';
import { useDispatch } from 'react-redux';
import { DELETE_DATA } from '../../../store/registration/actionTypes';

const ButtonDelete = () => {
    const dispatch = useDispatch();

    function deleteUser(event: React.MouseEvent<HTMLButtonElement>) {
        dispatch({ type: DELETE_DATA });
    };

    return (
        <button
            className={styles.button}
            onClick={deleteUser}
        >
            Удалить аккаунт
        </button>
    );
};

export default ButtonDelete;