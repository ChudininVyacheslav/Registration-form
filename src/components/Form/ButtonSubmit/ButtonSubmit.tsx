import React from 'react';

interface IProps {
    disabled: boolean;
}

const ButtonSubmit: React.FC<IProps> = ({ disabled }) => {
    return (
        <button
            disabled={disabled}
            type='submit' >Отправить
        </button>
    )
};

export default ButtonSubmit;