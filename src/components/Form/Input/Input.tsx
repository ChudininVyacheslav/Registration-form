import React from 'react';
import styles from './Input.module.scss';
import Tooltips from './Tooltips/Tooltips';

export interface IProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  value: string;
};

const Input: React.FC<IProps> = ({
  label,
  name,
  errorMessage,
  onChange,
  onBlur,
  value,
  ...props
}) => {
  return (
    <div className={styles.component}>
      <p className={styles.field}>
        <label htmlFor={name}></label>
        <br />
        <input
          className={styles.input}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={label}
          {...props}
        />
        <Tooltips
          errorMessage={errorMessage}
          value={value}
        />
      </p>
    </div>
  );
};

export default Input;