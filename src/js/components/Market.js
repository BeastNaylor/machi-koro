import React, { Component } from "react";
import { connect } from "react-redux";
import MarketCard from "./MarketCard";
import jss from 'jss'
import preset from 'jss-preset-default'
import { resetMarket, setupMarket } from "../actions/index";

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

const mapDispatchToProps = dispatch => {
  return {
    resetMarket: () => dispatch(resetMarket()),
    setupMarket: () => dispatch(setupMarket())
  };
};

const mapStateToProps = state => {
  return { state: state.market };
};

class ConnectedMarket extends React.Component {
  constructor(props) {
    super(props);

    this.handleReset = this.handleReset.bind(this);
    this.handleSetup = this.handleSetup.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset(event) {
    event.preventDefault();
    this.props.resetMarket();
  }

  handleSetup(event) {
    event.preventDefault();
    this.props.setupMarket();
  }

  handleClick(event) {
    event.preventDefault();
    this.props.resetMarket();
  }

  render() {
    return (
      <div>
        <ul className={classes.marketCardList}>
          {this.props.state.marketCards.map(card =>
            <MarketCard
              key={card.id}
              {...card}
            />
          )}
        </ul>
        <button type="submit"
          className="btn btn-danger btn-lg"
          onClick={this.handleReset}>
          Reset Market
          </button>
        <button type="submit"
          className="btn btn-warning btn-lg"
          onClick={this.handleSetup}>
          Setup Market
          </button>
      </div>
    );
  }
}

const Market = connect(mapStateToProps, mapDispatchToProps)(ConnectedMarket);

export default Market;