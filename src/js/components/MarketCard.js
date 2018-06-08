import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import styles from './MarketCard.css'

const MarketCard = ({ classes, card, num, onClick }) => (
    <li className={classes[card.type]} onClick={onClick.bind(this, card.name)}>
        <div>
            <span>{num}</span>
        </div>
        <div>
            <span>{card.name}</span>
        </div>
        <div>
            <span>{card.type}</span>
        </div>
        <div>
            <span>{card.cost}</span>
        </div>
    </li>
)

MarketCard.propTypes = {
    num: PropTypes.number.isRequired
}

export default injectSheet(styles)(MarketCard) 