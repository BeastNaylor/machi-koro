import React from 'react'
import PropTypes from 'prop-types'
import MarketCard from '../MarketCard/MarketCard'
import injectSheet from 'react-jss'
import styles from './Market.css'

const Market = ({ classes, resetMarket, purchaseCard, nextPlayer, market, players }) => (
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
    <button type="submit"
      className="btn btn-danger btn-lg"
      onClick={resetMarket}>
      New Game
    </button>
    <button type="submit"
      className="btn btn-danger btn-lg"
      onClick={nextPlayer}>
      Finish Player {players.activePlayer}
    </button>
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
