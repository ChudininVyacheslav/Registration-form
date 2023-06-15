import {useSelector} from "react-redux";
import Title from "../common/Title/Title";
import styles from "./Greeting.module.scss";
import {IReducerState} from "../Login/Login";

const Greeting = () => {
  const user = useSelector<IReducerState, IReducerState>((state) => state);

  return (
    <div className={styles.container}>
      <Title text={`Здравствуйте, ${user.user.name}`} />
    </div>
  );
};

export default Greeting;
