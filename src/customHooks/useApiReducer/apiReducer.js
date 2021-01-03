export const PENDING = "PENDING";
export const SUCCESS = "SUCCESS";
export const REJECTED = "REJECTED";
export const initialState = {
  isPending: false,
  isSuccess: false,
  isError: false,
  successData: null,
  errorData: null,
};
const apiReducer = (state = initialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case PENDING:
      return { ...initialState, isPending: true };
    case SUCCESS:
      return {
        ...state,
        isPending: false,
        isSuccess: true,
        successData: payload,
      };
    case REJECTED:
      return { ...state, isPending: false, isError: true, errorData: payload };

    default:
      return state;
  }
};

export default apiReducer;
