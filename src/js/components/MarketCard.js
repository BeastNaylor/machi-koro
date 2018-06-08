import React from 'react'
import PropTypes from 'prop-types'
import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

// Create your style.
const styles = {
    marketCard: {
        width: '18%',
        margin: "0 2% 8px 0",
        padding: 0,
        border: '1px solid black',
        borderRadius: '5px',
        "& span": {
            display: 'block',
            textAlign: 'center'
        }
    },
    producer: {
        extend: 'marketCard',
        backgroundColor: 'lightblue'
    },
    grain: {
        extend: 'producer',
    },
    cog: {
        extend: 'producer',
    },
    cattle: {
        extend: 'producer',
    },
    cafe: {
        extend: 'marketCard',
        backgroundColor: 'lightcoral'
    },
    shop: {
        extend: 'marketCard',
        backgroundColor: 'lightgreen'
    }


}

const { classes } = jss.createStyleSheet(styles).attach()

const MarketCard = ({ card, num, onClick }) => (
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

export default MarketCard