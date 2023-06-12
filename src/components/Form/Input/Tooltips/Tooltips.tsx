import styles from './Tooltips.module.scss';

interface IProps {
    errorMessage: string | any;
    value: string;
};

const Tooltips: React.FC<IProps> = ({ errorMessage, value }) => {

    return (
        <div>
            {errorMessage && value !== '' ? <p className={styles.error}>{errorMessage}</p> : false}
        </div>
    );
};

export default Tooltips;