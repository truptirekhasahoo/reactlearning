import InitialData from "../InitialData";

const myReducer = (state = InitialData, action) => {
  switch (action.type) {
    case "user":
      state = {
        ...state,
        user: action.payload,
      };
      return state;
      break;
      case "post":
      state = {
        ...state,
        post: action.payload,
      };
      return state;
    default:
      return state;
  }
};
export default myReducer;
