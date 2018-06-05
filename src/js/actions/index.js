import { SETUP_MARKET, PURCHASE_CARD } from "../constants/action-types"

export function setupMarket() {
  type: "SETUP_MARKET"
}

export const purchaseCard = card => ({
  type: PURCHASE_CARD, 
  payload: card
});
