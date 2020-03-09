import React from "react";
import PropTypes from "prop-types";

import Todo from "./todo";

const todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            text={todo.text}
            isCompleted={todo.isCompleted}
            completeTodo={completeTodo}
            index={index}
          />
        );
      })}
    </section>
  );
};

todos.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default todos;
