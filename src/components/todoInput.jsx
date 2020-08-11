import React from "react";

import "./../styles/todoInput.scss";

const TodoInput = ({ onChange, todo, onSubmit }) => {
  return (
    <div className="add-item__container">
      <div className="add-item__header">Add a Todo</div>
      <div className="add-item__body">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="add-item__body--input"
            value={todo}
            onChange={onChange}
          />
          <button type="submit" className="add-item__body--button">
            Add!
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoInput;
