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
        backgroundColor: 'red',
        "& span": {
            display: 'block',
            textAlign: 'center'
        }
    }

}

const {classes} = jss.createStyleSheet(styles).attach()

const MarketCard = ({ name, type, cost }) => (
    <li className={classes.marketCard}>
        <div>
            <span>{name}</span>
        </div>
        <div>
            <span>{type}</span>
        </div>
        <div>
            <span>{cost}</span>
        </div>
    </li>
)

MarketCard.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired
}

export default MarketCard