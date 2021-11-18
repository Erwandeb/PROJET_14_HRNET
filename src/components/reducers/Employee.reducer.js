import { GET_EMPLOYEE } from "../actions/Employee.actions";

const initialState = {};

export default function employeesReducer(state= initialState, action){
    switch (action.type){
        case GET_EMPLOYEE:
            return action.payload;
        default:
            return state
    }
}

