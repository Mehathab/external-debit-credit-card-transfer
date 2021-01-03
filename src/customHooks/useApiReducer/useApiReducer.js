import { useReducer } from "react";
import apiReducer, {
  initialState,
  PENDING,
  SUCCESS,
  REJECTED,
} from "./apiReducer";

const useApiReducer = (promise) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);
  const actionCreator = (type) => (payload) => ({ type, payload });

  const apiCall = (...params) => {
    dispatch(actionCreator(PENDING)());
    promise(...params)
      .then((response) => dispatch(actionCreator(SUCCESS)(response?.data)))
      .catch((error) => dispatch(actionCreator(REJECTED)(error)));
  };
  return [state, apiCall];
};
export default useApiReducer;
