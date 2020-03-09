import React, { useState } from "react";
import propTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = e => {
    e.preventDefault();

    if (!value) {
      alert("No blank todo!");
      return;
    }

    addTodo(value);
    setValue("");
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="add-btn main-white-color">Add</button>
      </form>
    </section>
  );
};

TodoForm.propTypes = {
  addTodo: propTypes.func.isRequired
};
export default TodoForm;
