import {CLOSE_MODAL, OPEN_MODAL} from "./actionTypes";

const inintialState: Boolean = false;

interface Action {
  type: string;
}

export const modalReducer = (state = inintialState, action: Action): any => {
  switch (action.type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return inintialState;
    default:
      return state;
  }
};
