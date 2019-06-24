import { RESET_MARKET, PURCHASE_CARD, NEXT_PLAYER, NEW_PLAYERS } from '../constants/action-types'

export const resetMarket = () => ({
  type: RESET_MARKET
})

export const nextPlayer = () => ({
  type: NEXT_PLAYER
})

export const newPlayers = () => ({
  type: NEW_PLAYERS
})

export const purchaseCard = card => ({
  type: PURCHASE_CARD,
  payload: card
})
