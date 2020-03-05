import React from "react";
import "./styles.css";
import Paper from "./components/paper";

export default function App() {
  return (
    <Paper>
      <section className="header">
        <button className="header-btn main-white-color">Add</button>
        <h1 className="header-title">To-do Lists</h1>
        <button className="header-btn main-orange-color">Clear</button>
      </section>

      <section className="add">
        <form className="add-form">
          <input type="text" className="add-input" />
          <button className="add-btn main-white-color">Add</button>
        </form>
      </section>

      <section className="todos">
        <div className="todo">
          <span className="todo-text">Learn React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learn React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learn React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learn React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learn React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learn React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learn React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learn React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learn React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learn React</span>
        </div>
      </section>
    </Paper>
  );
}
