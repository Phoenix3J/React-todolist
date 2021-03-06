import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      <button className="header-btn main-white-color" onClick={showAddToggle}>
        {showAdd ? "finish" : "Add"}
      </button>
      <h1 className="header-title">To-do Lists</h1>
      <button className="header-btn main-orange-color" onClick={clearTodos}>
        Clear
      </button>
    </section>
  );
};

Header.PropTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
