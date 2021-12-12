import { SELL_COMPUTER } from "../types/types";

const initialState = {
  numberOfComputers: 400,
};

const computerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELL_COMPUTER:
      return {
        ...state,
        numberOfComputers: state.numberOfComputers - action.payload,
      };

    default:
      return state;
  }
};

export default computerReducer;
