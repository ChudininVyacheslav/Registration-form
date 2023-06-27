// import './App.css';
import styles from "./App.module.scss";
import Form from "./components/Form/Form";
import Modal from "./components/common/Modal/Modal";
import Button from "./components/common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {IReducerState} from "./components/Login/Login";
import {CLOSE_MODAL} from "./store/modal/actionTypes";
import Title from "./components/common/Title/Title";

function App() {
  const dispatch = useDispatch();

  function closeModal() {
    dispatch({type: CLOSE_MODAL});
  }

  const modal = useSelector<IReducerState, IReducerState>((state) => state);

  const modalInitialState = modal.modal;

  return (
    <div>
      <Form />
      <Modal isOpend={modalInitialState}>
        <div className={styles["modal__btn"]}>
          <Button
            label="Закрыть"
            onClick={() => {
              closeModal();
            }}
          />
        </div>
        <Title text="Вы успешно зарегистрировались, перейдите на страницу входа" />
      </Modal>
    </div>
  );
}

export default App;
