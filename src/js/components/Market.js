import React from "react";
import MarketCard from "./MarketCard";
import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

// Create your style.
const styles = {
  marketCardList: {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap'
  }
}

const { classes } = jss.createStyleSheet(styles).attach()

const Market = ({ resetMarket, setupMarket, purchaseCard, state }) => (
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

export default Market;