import React from 'react';
import styles from './Input.module.scss';
import { IProps } from './interfaces';

let inputNode = document.querySelector('input');
let tinputNode1 = document.querySelectorAll("input");




const Input: React.FC<IProps> = ({
  label,
  name,
  errorMessage,
  onChange,
  onBlur,
  value,
  ...props
}) => {
  function clearInputs() {
 
    // console.log(tinputNode1[2])
    // console.log(tinputNode1[3])
    // console.log(tinputNode1[4])
    // console.log(tinputNode1[5])
  
    // console.log('da')
     tinputNode1[0].value = '';
    tinputNode1[1].value = '';
    // console.log(tinputNode1[0])
    // console.log(tinputNode1[1])
    // tinputNode1[2].value = '';
    // tinputNode1[3].value = '';
    // tinputNode1[4].value = '';
    // tinputNode1[5].value = '';
  
  }
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
      <button
        type='button'
      onClick={()=>{clearInputs()}}
      >dsdsdsdsad</button>
    </div>
  );
};

export default Input;