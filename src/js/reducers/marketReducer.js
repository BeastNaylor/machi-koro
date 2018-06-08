import { RESET_MARKET, SETUP_MARKET, PURCHASE_CARD } from "../constants/action-types";
import update from 'react-addons-update';
import shuffle from '../lib/shuffle';

const marketReducer = (state = getInitialState(), action) => {
  let newState;
  switch (action.type) {
    case RESET_MARKET:
      return getInitialState();
    case SETUP_MARKET:
      //take cards from the deck and add to the market
      newState = fillMarket(state);
      return update(state, { marketCards: { $set: newState.marketCards }, marketDeck: { $set: newState.marketDeck } });
    case PURCHASE_CARD:
      state.marketCards = state.marketCards.filter(function (obj) {
        return obj.id !== action.payload;
      });
      newState = fillMarket(state);
      return update(state, { marketCards: { $set: newState.marketCards }, marketDeck: { $set: newState.marketDeck } });
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
    deck.push(marketCardInfo("Forest", 5, "cog"));
    deck.push(marketCardInfo("Field", 1, "grain"))
    deck.push(marketCardInfo("Cafe", 1, "cafe"))
  }
  shuffle(deck);
  return deck;
}

function fillMarket(state) {
  while (state.marketCards.length < 10 && state.marketDeck.length > 0) {
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
