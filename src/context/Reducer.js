import { SIGNUP, SIGNIN, UPDATE, LOGOUT } from "./Types";

//Reducer

export const authReducer = (state, action) => {
  switch (action.type) {
    case SIGNUP:
      return action.payload;
    case SIGNIN:
      return action.payload;
    case UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT:
      return null;
    default:
      return state;
  }
};
