import { NEW_PLAYERS, NEXT_PLAYER } from '../constants/action-types'
import update from 'react-addons-update'

const playerReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case NEW_PLAYERS:
      return getNewGameState()
    case NEXT_PLAYER:
      let newActive = (state.activePlayer+1) % state.players.length
      return update(state, {activePlayer : { $set: newActive }})
    default:
      return state
  }
}


function getInitialState () {
  return {
    players: [],
    activePlayer: -1,
    gameHasStarted: false
  }
}

function getNewGameState () {
  return {
    players: setupPlayers(),
    activePlayer: 0,
    gameHasStarted: true
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
