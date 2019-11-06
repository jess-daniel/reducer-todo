import React, { useReducer, useState } from "react";

// Component imports
import { initialState, reducer } from "../reducers/TodoReducer";
import Todo from "../components/Todo";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [title, setTitle] = useState("");

  const handleChanges = e => {
    setTitle(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: title });
  };

  const handleToggle = checkTodo => {
    state.todos.forEach(todo => {
      if (todo.id === checkTodo.id) {
        dispatch({
          type: "TOGGLE"
        });
      }
    });
  };

  console.log("this state", state);
  return (
    <>
      <h1>Todo List</h1>
      <form>
        <label>
          Title:
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChanges}
            value={title}
          />
          <button type="submit" onClick={addTodo}>
            Add Todo
          </button>
        </label>
      </form>
      {state.todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggle={handleToggle} />
      ))}
    </>
  );
};

export default TodoList;
