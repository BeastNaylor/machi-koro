import React from 'react'
import PropTypes from 'prop-types'
import MarketCard from '../MarketCard/MarketCard'
import injectSheet from 'react-jss'
import styles from './Market.css'

const Market = ({ classes, purchaseCard, market }) => (
  <div>
    <ul className={classes.marketCardList}>
      {market.marketCards.map(card =>
        <MarketCard
          key={card.id}
          {...card}
          onClick={purchaseCard}
        />
      )}
    </ul>
  </div>
)

Market.propTypes = {
  classes: PropTypes.object.isRequired,
  market: PropTypes.shape({
    marketCards: PropTypes.array.isRequired
  }),
  market: PropTypes.shape({
    activePlayer: PropTypes.number
  }),
  resetMarket: PropTypes.func,
  purchaseCard: PropTypes.func
}

export default injectSheet(styles)(Market)
