import React, { useEffect } from "react";
import { connect } from "react-redux";
import CheckoutPage from "../../components/Checkout";
import * as actions from "../../actions/Header";

const Checkout = ({ setHeaderStatus, setFooterStatus }) => {
  useEffect(() => {
    setHeaderStatus(false);
    setFooterStatus(false);
  }, []);
  return <CheckoutPage />;
};

export default connect(null,actions)(Checkout);