import React from "react";
import Todo from "./todo";

const todos = () => {
  const todos = [
    {
      text: "belajar react"
    },
    {
      text: "belajar 1"
    },
    {
      text: "belajar 2"
    },
    {
      text: "belajar 3"
    },
    {
      text: "belajar 4"
    },
    {
      text: "belajar 5"
    },
    {
      text: "belajar 6"
    },
    {
      text: "belajar 7"
    },
    {
      text: "belajar 8"
    }
  ];

  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default todos;
