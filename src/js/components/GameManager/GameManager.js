import React from 'react'
import PropTypes from 'prop-types'
import ConnectedMarket from '../Market/ConnectedMarket'
import injectSheet from 'react-jss'
import styles from './GameManager.css.js'

const GameManager = ({ classes, resetMarket, nextPlayer, players }) => (
    <div>
        <div className="row">
            <div className="col-sm-12">
                <span className={classes.title}>Machi Koro</span>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                {players.gameHasStarted && <span>Current Player: {players.activePlayer}</span>}
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <ConnectedMarket>
                </ConnectedMarket>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <button type="submit"
                    className="btn btn-danger btn-lg"
                    onClick={resetMarket}>
                    New Game
            </button>
                <button type="submit"
                    className="btn btn-danger btn-lg"
                    onClick={nextPlayer}>
                    End Turn
                </button>
            </div>
        </div>
    </div>
)

GameManager.propTypes = {
    classes: PropTypes.object.isRequired,
    resetMarket: PropTypes.func,
    purchaseCard: PropTypes.func
}

export default injectSheet(styles)(GameManager)