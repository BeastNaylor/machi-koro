import React from 'react'
import PropTypes from 'prop-types'
import MarketCard from './MarketCard'
import injectSheet from 'react-jss'
import styles from './Market.css'

const Market = ({ classes, resetMarket, setupMarket, purchaseCard, state }) => (
  <div>
    <ul className={classes.marketCardList}>
      {state.marketCards.map(card =>
        <MarketCard
          key={card.id}
          {...card}
          onClick={purchaseCard}
        />
      )}
    </ul>
    <button type="submit"
      className="btn btn-danger btn-lg"
      onClick={resetMarket}>
      Reset Market
    </button>
    <button type="submit"
      className="btn btn-warning btn-lg"
      onClick={setupMarket}>
      Setup Market
    </button>
  </div>
)

Market.propTypes = {
  classes: PropTypes.object.isRequired,
  state: PropTypes.shape({
    marketCards: PropTypes.array.isRequired
  }),
  resetMarket: PropTypes.func,
  setupMarket: PropTypes.func,
  purchaseCard: PropTypes.func
}

export default injectSheet(styles)(Market)
