import React from "react";

import "./../styles/todoItem.scss";

const TodoItem = ({ todo, key, id, onUpdate, onDelete, onDoneToggle }) => {
  return (
    <div
      className={
        todo.done ? "todo-item__container done" : "todo-item__container"
      }
    >
      <input
        className="todo-item__name"
        value={todo.whatToDo}
        id={id}
        onChange={(e) => {
          onUpdate(e.target.value, id);
        }}
      />
      <span
        className={todo.done ? "fa fa-check done" : "fa fa-check"}
        onClick={() => onDoneToggle(id)}
      ></span>
      <span className="fa fa-minus-circle" onClick={() => onDelete(id)}></span>
    </div>
  );
};

export default TodoItem;
