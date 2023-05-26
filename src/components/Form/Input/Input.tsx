import React from 'react';
import styles from './Input.module.scss';
import { IProps } from './interfaces';

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
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </p>
    </div>
  );
};

export default Input;