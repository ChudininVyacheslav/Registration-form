import { object } from "yup";

const ADD_DATA = 'ADD_DATA';

interface Payload {
    name: string,
    secondName: string,
    password: string,
    confirmPassword: string,
    email: string,
    confirmEmail: string,
  }

interface Action {
    type: string,
    payload: Payload
}

const inintialState:  object[] = [];


// (alias) const reducer: (state: object[] | undefined, action: Action) => (number | object)[]


export const reducer = (state = inintialState, action: Action) => {
    switch (action.type) {
        case ADD_DATA:
            return [...state, state.push(action.payload)]
        default:
        return [ ...state, state.push(action.payload)];
    } 
  };