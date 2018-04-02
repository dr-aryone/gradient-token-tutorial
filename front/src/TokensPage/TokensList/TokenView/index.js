import React from "react";
import PropTypes from "prop-types";
import TokenImage from "components/TokenImage";
import "./TokenView.css";

const TokenView = ({ token }) => (
  <div>
    <div className="TokenView-image_wrapper">
      <TokenImage size={200} outer={token[0]} inner={token[1]} />
    </div>
    <div className="TokenView-label">{`${token[0]} – ${token[1]}`}</div>
  </div>
);

TokenView.propTypes = {
  token: PropTypes.array.isRequired
};

export default TokenView;
