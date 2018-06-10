import { RESET_MARKET, SETUP_MARKET, PURCHASE_CARD } from '../constants/action-types'
import update from 'react-addons-update'
import shuffle from '../lib/shuffle'

const marketReducer = (state = getInitialState(), action) => {
  let newState
  switch (action.type) {
    case RESET_MARKET:
      return getInitialState()
    case SETUP_MARKET:
      // take cards from the deck and add to the market
      newState = fillMarket(state)
      return update(state, { marketCards: { $set: newState.marketCards }, marketDeck: { $set: newState.marketDeck } })
    case PURCHASE_CARD:

      let existingCardIndex = state.marketCards.findIndex(e => e.card.name === action.payload)
      if (existingCardIndex >= 0) {
        // if we have the card already, increase the count
        state.marketCards[existingCardIndex].num--
        if (state.marketCards[existingCardIndex].num === 0) {
          state.marketCards.splice(existingCardIndex, 1)
        }
      }

      newState = fillMarket(state)
      return update(state, { marketCards: { $set: newState.marketCards }, marketDeck: { $set: newState.marketDeck } })
    default:
      return state
  }
}

function getInitialState () {
  return {
    marketDeck: buildMarketDeck(),
    marketCards: []
  }
}

function buildMarketDeck () {
  let deck = []
  for (let ii = 0; ii <= 5; ii++) {
    deck.push(marketCardInfo('Wheat Field', 1, 'grain'))
    deck.push(marketCardInfo('Ranch', 1, 'cattle'))
    deck.push(marketCardInfo('Bakery', 1, 'bread'))
    deck.push(marketCardInfo('Cafe', 2, 'coffee'))
    deck.push(marketCardInfo('Convenience Store', 2, 'bread'))
    deck.push(marketCardInfo('Forest', 3, 'cog'))
    deck.push(marketCardInfo('Cheese Factory', 5, 'factory'))
    deck.push(marketCardInfo('Furniture Factory', 3, 'factory'))
    deck.push(marketCardInfo('Mine', 6, 'cog'))
    deck.push(marketCardInfo('Family Restaurant', 3, 'coffee'))
    deck.push(marketCardInfo('Apple Orchard', 3, 'grain'))
    deck.push(marketCardInfo('Fruit & Veg Stand', 2, 'fruit'))
  }
  shuffle(deck)
  return deck
}

let marketId = 0
function fillMarket (state) {
  while (state.marketCards.length < 5 && state.marketDeck.length > 0) {
    var newCard = state.marketDeck.pop()

    let existingCardIndex = state.marketCards.findIndex(e => e.card.name === newCard.name)
    if (existingCardIndex >= 0) {
      // if we have the card already, increase the count
      state.marketCards[existingCardIndex].num++
    } else {
      state.marketCards.push({ card: newCard, num: 1, id: marketId })
      marketId++
    }
  }
  return state
}

let cardId = 0
function marketCardInfo (name, cost, type) {
  return {
    id: cardId++,
    name: name,
    cost: cost,
    type: type
  }
}

export default marketReducer
