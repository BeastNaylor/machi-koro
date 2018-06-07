import { connect } from "react-redux";
import { resetMarket, setupMarket } from "../actions/index";
import Market from "./Market";

const mapDispatchToProps = dispatch => {
    return {
        resetMarket: () => dispatch(resetMarket()),
        setupMarket: () => dispatch(setupMarket())
    };
};

const mapStateToProps = state => {
    return { state: state.market };
};

const ConnectedMarket = connect(mapStateToProps, mapDispatchToProps)(Market);

export default ConnectedMarket;