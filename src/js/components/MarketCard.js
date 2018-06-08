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
    grain: {
        extend: 'marketCard',
        backgroundColor: 'lightgreen'
    },
    cog: {
        extend: 'marketCard',
        backgroundColor: 'lightblue'
    },
    cafe: {
        extend: 'marketCard',
        backgroundColor: 'lightcoral'
    }


}

const {classes} = jss.createStyleSheet(styles).attach()

const MarketCard = ({ id, name, type, cost, onClick }) => (
    <li className={classes[type]} onClick={onClick.bind(this, id)}>
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