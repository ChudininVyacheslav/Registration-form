import React from "react";
import styles from "./ButtonLink.module.scss";
import { Link } from "react-router-dom";

interface IProps {
  label: string;
  path: string;
}

const ButtonLink: React.FC<IProps> = ({ label, path }) => {
  return (
    <Link className={styles.button} to={path}>
      {label}
    </Link>
  );
};

export default ButtonLink;
