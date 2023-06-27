import React from "react";
import styles from "./Modal.module.scss";

export interface IProps {
  isOpend: Boolean;
  children: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ isOpend, children }) => {
  return (
    <div className={`${styles.modal} ${isOpend ? styles["modal_opened"] : ""}`}>
      <div className={styles["modal__body"]}>{children}</div>
    </div>
  );
};

export default Modal;
