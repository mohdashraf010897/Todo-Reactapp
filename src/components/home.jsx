import React, { useState } from "react";
import TodoList from "./todoList";
import "./../styles/home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <TodoList />
    </div>
  );
};

export default Home;
