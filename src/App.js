/*
 * @Descripttion:
 * @version:
 * @Author: shaye
 * @Date: 2024-05-25 17:19:49
 * @LastEditors: shaye
 * @LastEditTime: 2024-05-26 23:38:09
 */

import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  toggleChecked,
  editNameByID,
  deleteTodoByID,
} from "./store/reducer/taskReducer";

function App() {

  const [filter, setFilter] = useState("All");

  const dispatch = useDispatch();

  let filterMap = {
    All: (task) => task,
    Active: (task) => task.done !== true,
    Completed: (task) => task.done === true,
  };

  function addTodoFun(val) {
    dispatch(addTodo({val}));
  }

  function toggleCheckedFun(id) {
    dispatch(toggleChecked({id}));
  }

  function editNameByIDFun(id, newName) {
    dispatch(editNameByID({id, newName}));
  }

  function deleteTodoByIDFun(id) {
    dispatch(deleteTodoByID({id}));
  }

  function countByType(type) {
    setFilter(type);
  }

  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="app">
      <h1>TodoMatic</h1>
      <Form addTodo={addTodoFun} countByType={countByType} />
      <h4>{tasks.filter(filterMap[filter]).length} tasks remaining</h4>
      {tasks.filter(filterMap[filter]).map((task) => (
        <Todo
          key={task.id}
          id={task.id}
          name={task.name}
          done={task.done}
          toggleChecked={toggleCheckedFun}
          editNameByID={editNameByIDFun}
          deleteTodoByID={deleteTodoByIDFun}
        ></Todo>
      ))}
    </div>
  );
}

export default App;
