import React from 'react'

const MarketCard = ({ name, type, cost }) => (
    <div>
        <span>{name}</span>
        <span>{type}</span>
        <span>{cost}</span>
    </div>
)

export default MarketCard