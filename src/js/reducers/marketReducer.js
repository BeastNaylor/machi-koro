import { SETUP_MARKET, PURCHASE_CARD } from "../constants/action-types";

const marketReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case SETUP_MARKET:
      return state;
    case PURCHASE_CARD:
      return state;
    default:
      return state;
  }
};

function getInitialState() {
  return {
    cards: 90
  }
}

export default marketReducer;
