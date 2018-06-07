import React, { Component } from "react";
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

class Market extends React.Component {
  render() {
    return (
      <div>
        <ul className={classes.marketCardList}>
          <MarketCard name="Test1" type="Test" cost={2}></MarketCard>
          <MarketCard name="Test2" type="Prod" cost={4}></MarketCard>
          <MarketCard name="Test2" type="Prod" cost={4}></MarketCard>
          <MarketCard name="Test2" type="Prod" cost={4}></MarketCard>
          <MarketCard name="Test2" type="Prod" cost={4}></MarketCard>
          <MarketCard name="Test2" type="Prod" cost={4}></MarketCard>
          <MarketCard name="Test2" type="Prod" cost={4}></MarketCard>
          <MarketCard name="Test2" type="Prod" cost={4}></MarketCard>
          <MarketCard name="Test2" type="Prod" cost={4}></MarketCard>
          <MarketCard name="Test2" type="Prod" cost={4}></MarketCard>
        </ul>
      </div>
    );
  }
}

export default Market