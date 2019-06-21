import { connect } from 'react-redux'
import { resetMarket, setupMarket, purchaseCard } from '../actions/index'
import Market from './Market'

const mapDispatchToProps = dispatch => {
  return {
    resetMarket: () => dispatch(resetMarket()),
    purchaseCard: card => dispatch(purchaseCard(card))
  }
}

const mapStateToProps = state => {
  return { state: state.market }
}

const ConnectedMarket = connect(mapStateToProps, mapDispatchToProps)(Market)

export default ConnectedMarket
