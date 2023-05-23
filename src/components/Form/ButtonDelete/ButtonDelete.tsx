import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_DATA } from '../../../store/registration/actionTypes';

const ButtonDelete = () => {
    const dispatch = useDispatch();

    function deleteUser(event: React.MouseEvent<HTMLButtonElement>) {
        // event.preventDefault();
        dispatch({ type: DELETE_DATA })
    };

    return (
        <button
            onClick={deleteUser}
        >
            Удалить
        </button>
    )
};

export default ButtonDelete;