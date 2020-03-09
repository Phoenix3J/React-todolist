import React, { useState } from "react";
import propTypes from "prop-types";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = e => {
    e.preventDefault();
    //set kalo nge add nya kosong
    if (!value) {
      alert("No blank todo!");
      return;
    }
    //set length inputa
    if (value.length > 35) {
      alert("please yg pendek2 aja cok");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
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
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: propTypes.func.isRequired,
  showAdd: propTypes.bool.isRequired
};
export default TodoForm;
