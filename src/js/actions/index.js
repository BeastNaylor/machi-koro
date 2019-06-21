import { RESET_MARKET, PURCHASE_CARD } from '../constants/action-types'

export const resetMarket = () => ({
  type: RESET_MARKET
})

export const purchaseCard = card => ({
  type: PURCHASE_CARD,
  payload: card
})
