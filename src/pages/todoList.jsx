import React, { useState } from "react";

import Paper from "../components/paper";
import Header from "../components/header";
import TodoForm from "../components/todoForm";
import Todos from "../components/todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learn React1" },
    { text: "learn react 2" },
    { text: "learn react 3" }
  ]);

  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
