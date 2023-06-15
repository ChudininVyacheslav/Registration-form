import styles from "./ButtonBase.module.scss";

interface IProps {
  onClick?: () => void;
  label: string;
  disabled?: Boolean | any;
}

const ButtomBase: React.FC<IProps> = ({ onClick, label, disabled }) => {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtomBase;
