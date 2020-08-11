import React, { useState, useEffect } from "react";
import TodoInput from "./todoInput";
import TodoItem from "./todoItem";
import { v4 as uuidv4 } from "uuid";
import "./../styles/todoList.scss";

const TodoList = () => {
  const [state, setState] = useState({
    todoItems: [],
    id: 0,
    item: "",
    editItem: false,
  });

  const handleChange = (e) => {
    setState({ ...state, item: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: state.id,
      whatToDo: state.item,
      done: false,
    };

    const updatedItems = [...state.todoItems, newItem];

    setState({
      todoItems: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };

  const handleClear = () => {
    setState({ ...state, todoItems: [], item: "" });
  };

  const handleDelete = (id) => {
    const updatedItems = state.todoItems.filter((todo) => todo.id !== id);
    setState({ ...state, todoItems: [...updatedItems] });
  };

  const handleUpdate = (value, id) => {
    const todoItems = state.todoItems;
    todoItems.map((todo) => {
      if (todo.id === id) {
        todo.whatToDo = value;
      }
    });
    setState({ ...state, todoItems: [...todoItems] });
  };

  const handleDoneToggle = (id) => {
    const todoItems = state.todoItems;
    var indexOfItem = 0;
    todoItems.filter((todo, idx) => {
      if (todo.id === id) indexOfItem = idx;
    });
    const itemToMark = todoItems[indexOfItem];
    todoItems.splice(indexOfItem, 1);
    itemToMark.done = !itemToMark.done;
    itemToMark.done
      ? todoItems.push(itemToMark)
      : todoItems.unshift(itemToMark);
    setState({ ...state, todoItems: [...todoItems] });
  };

  return (
    <div className="todoList-container">
      <div className="header">Todolist </div>
      <div className="body">
        <TodoInput
          onChange={handleChange}
          todo={state.item}
          onSubmit={handleSubmit}
        />
        <div className="list-items__container">
          <div className="list-items__header">Todo List</div>
          <div className="list-items__body">
            {/* a list will appear here */}
            {state.todoItems?.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                id={todo.id}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                onDoneToggle={handleDoneToggle}
              />
            ))}
          </div>
        </div>
      </div>

      <button className="footer" onClick={handleClear}>
        Clear All
      </button>
      <p>Note: Simply click on todo text to edit</p>
    </div>
  );
};

export default TodoList;
