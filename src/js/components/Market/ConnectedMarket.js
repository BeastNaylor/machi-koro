import { connect } from 'react-redux'
import { resetMarket, nextPlayer, purchaseCard, newPlayers } from '../../actions/index'
import Market from './Market'

const mapDispatchToProps = dispatch => {
  return {
    purchaseCard: card => dispatch(purchaseCard(card))
  }
}

const mapStateToProps = state => {
  return { 
    market: state.market
  }
}

const ConnectedMarket = connect(mapStateToProps, mapDispatchToProps)(Market)

export default ConnectedMarket
