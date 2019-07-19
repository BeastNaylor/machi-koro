import { connect } from 'react-redux'
import { resetMarket, nextPlayer, purchaseCard, newPlayers } from '../../actions/index'
import GameManager from './GameManager'

const mapDispatchToProps = dispatch => {
    return {
      resetMarket: () => dispatch([resetMarket(), newPlayers()]),
      nextPlayer: () => dispatch(nextPlayer())
    }
  }

  const mapStateToProps = state => {
    return { 
      players: state.players
    }
  }

  const ConnectedGameManager = connect(mapStateToProps, mapDispatchToProps)(GameManager)
  export default ConnectedGameManager