import { NEW_PLAYERS, NEXT_PLAYER } from '../constants/action-types'
import update from 'react-addons-update'

const playerReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case NEW_PLAYERS:
      return getInitialState()
    case NEXT_PLAYER:
      let newActive = (state.activePlayer++) % state.players.length
      return update(state, {activePlayer : { $set: newActive }})
    default:
      return state
  }
}

function getInitialState () {
  return {
    players: setupPlayers(),
    activePlayer: 0
  }
}

const numPlayers = 4;
function setupPlayers () {
  let players = []
  for (let ii = 1; ii <= numPlayers; ii++) {
    players.push(playerInfo(ii))
  }
  return players
}

function playerInfo (playerId) {
  return {
    id: playerId,
    cards: []
  }
}

export default playerReducer
