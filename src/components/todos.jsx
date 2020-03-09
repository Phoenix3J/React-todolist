import React from "react";
import PropTypes from "prop-types";

import Todo from "./todo";

const todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((todo, index) => {
        return <Todo key={index} text={todo.text} />;
      })}
    </section>
  );
};

todos.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
};

export default todos;
