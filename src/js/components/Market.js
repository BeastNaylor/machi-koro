import React, { Component } from "react";
import MarketCard from "./MarketCard";

class Market extends React.Component {
  render() {
    return (
      <div>
        <MarketCard name="Test1" type="Test"></MarketCard>
        <MarketCard name="Test2" type="Prod"></MarketCard>
      </div>
    );
  }
}

export default Market