const ADD_DATA = 'ADD_DATA';

interface Payload {
    name: string,
    secondName: string,
    password: string,
    confirmPassword: string,
    email: string,
    confirmEmail: string,
};

interface Action {
    type: string,
    payload: Payload
};

const inintialState: object[] = [];

export const reducer = (state = inintialState, action: Action): any => {
    switch (action.type) {
        case ADD_DATA:
            console.log(state)
            return [...state, action.payload]
        default:
            return [...state];
    };
};