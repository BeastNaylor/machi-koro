import { RESET_MARKET, SETUP_MARKET, PURCHASE_CARD } from "../constants/action-types";
import update from 'react-addons-update';

const marketReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case RESET_MARKET:
      return getInitialState();
    case SETUP_MARKET:
      //take cards from the deck and add to the market
      var newState = fillMarket(state);
      return update(state, { marketCards: { $set: newState.marketCards }, marketDeck: { $set: newState.marketDeck } });
    case PURCHASE_CARD:
      return state;
    default:
      return state;
  }
};

function getInitialState() {
  return {
    marketDeck: buildMarketDeck(),
    marketCards: []
  }
}

function buildMarketDeck() {
  let deck = [];
  for (let ii = 0; ii <= 5; ii++) {
    deck.push(marketCardInfo("Forest", 5, "Cog"));
    deck.push(marketCardInfo("Field", 1, "Grain"))
  }
  return deck;
}

function fillMarket(state) {
  while (state.marketCards.length < 10) {
    var newCard = state.marketDeck.pop();
    state.marketCards.push(newCard);
  }
  return state;
}

let cardId = 0
function marketCardInfo(name, cost, type) {
  return {
    id: cardId++,
    name: name,
    cost: cost,
    type: type
  }
}

export default marketReducer;
