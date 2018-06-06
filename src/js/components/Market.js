import React, { Component } from "react";
import MarketCard from "./MarketCard";

class Market extends React.Component {
  render() {
    return (
      <div>
        <MarketCard name="Test1" type="Test" cost={2}></MarketCard>
        <MarketCard name="Test2" type="Prod"cost={4}></MarketCard>
      </div>
    );
  }
}

export default Market