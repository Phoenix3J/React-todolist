import React from "react";
import PropTypes from "prop-types";

import Todo from "./todo";

const todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.length > 0 &&
        todos.map((todo, index) => {
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

      {todos.length === 0 && (
        <div className="todo-placeholder-text">
          Add Todo by Clicking{" "}
          <span className="add-button-placeholder-text">Add Button</span> on the
          top-left corner
        </div>
      )}
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
