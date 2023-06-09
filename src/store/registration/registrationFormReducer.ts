import {IRegistrationState, Action} from "./interfaces";
import {ADD_DATA, DELETE_DATA} from "./actionTypes";

export type TActionTypes = typeof ADD_DATA | typeof DELETE_DATA;

const inintialState: IRegistrationState = {
  name: "",
  secondName: "",
  password: "",
  confirmPassword: "",
  email: "",
  confirmEmail: "",
};

export const registrationFormReducer = (
  state = inintialState,
  action: Action
): any => {
  switch (action.type) {
    case ADD_DATA:
      return {...state, ...action.payload};
    case DELETE_DATA:
      return inintialState;
    default:
      return state;
  }
};
