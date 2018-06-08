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

      let existingCardIndex = state.marketCards.findIndex(e => e.card.name === action.payload);
      if (existingCardIndex >= 0) {
        //if we have the card already, increase the count
        state.marketCards[existingCardIndex].num--;
        if (state.marketCards[existingCardIndex].num === 0) {
          state.marketCards.splice(existingCardIndex, 1);
        }
      }

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
    deck.push(marketCardInfo("Field", 1, "grain"));
    deck.push(marketCardInfo("Cafe", 1, "cafe"));
    deck.push(marketCardInfo("Ranch", 1, "cattle"));
    deck.push(marketCardInfo("Mine", 1, "cog"));
    deck.push(marketCardInfo("Hamburger Stand", 1, "cafe"));
    deck.push(marketCardInfo("Furniture Factory", 1, "shop"));
    deck.push(marketCardInfo("Fruit & Veg Stand", 1, "shop"));
    deck.push(marketCardInfo("Bakery", 1, "shop"));
  }
  shuffle(deck);
  return deck;
}

let marketId = 0;
function fillMarket(state) {
  while (state.marketCards.length < 5 && state.marketDeck.length > 0) {
    var newCard = state.marketDeck.pop();

    let existingCardIndex = state.marketCards.findIndex(e => e.card.name === newCard.name);
    if (existingCardIndex >= 0) {
      //if we have the card already, increase the count
      state.marketCards[existingCardIndex].num++;
    } else {
      state.marketCards.push({ card: newCard, num: 1, id: marketId });
      marketId++;
    }
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
