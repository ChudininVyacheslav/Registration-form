import styles from "./Tooltip.module.scss";

interface IProps {
  value: string;
}

const Tooltip: React.FC<IProps> = ({ value }) => {
  return <p className={styles.error}>{value}</p>;
};

export default Tooltip;
