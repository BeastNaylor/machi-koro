import React from 'react'
import PropTypes from 'prop-types'

const MarketCard = ({ name, type, cost }) => (
    <div>
        <span>{name}</span>
        <span>{type}</span>
        <span>{cost}</span>
    </div>
)

MarketCard.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired
  }

export default MarketCard