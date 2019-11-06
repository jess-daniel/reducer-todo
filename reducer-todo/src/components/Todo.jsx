import React from "react";

const Todo = props => {
  return (
    <>
      <h2 onClick={props.toggle}>Title: {props.todo.item}</h2>
    </>
  );
};

export default Todo;
