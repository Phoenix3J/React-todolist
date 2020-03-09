import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToggle }) => {
  return (
    <section className="header">
      <button className="header-btn main-white-color" onClick={showAddToggle}>
        Add
      </button>
      <h1 className="header-title">To-do Lists</h1>
      <button className="header-btn main-orange-color">Clear</button>
    </section>
  );
};

Header.PropTypes = {
  showAddToggle: PropTypes.func.isRequired
};

export default Header;
