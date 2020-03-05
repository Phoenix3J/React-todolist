import React from "react";
import PropTypes from "prop-types";

const paper = ({ children }) => {
  return (
    <div className="container">
      <div className="frame">{children}</div>
    </div>
  );
};

paper.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default paper;
