/*
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2024-05-25 17:19:49
 * @LastEditors: shaye
 * @LastEditTime: 2024-05-25 17:30:31
 */

import { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Todo from './components/Todo';
import { nanoid } from 'nanoid';

function App() {
  const [tasks, setTasks] = useState([{
    id: '0',
    name: 'Eat',
    done: false
  }, {
    id: '1',
    name: 'Sleep',
    done: true
  }, {
    id: '2',
    name: 'Repeat',
    done: false
  }])

  const [filter, setFilter] = useState('All')

  let filterMap = {
    'All': task => task,
    'Active': task => task.done != true,
    'Completed': task => task.done === true
  }


  function addTodo(val) {

    setTasks([...tasks, {
      id: nanoid(),
      name: val,
      done: false
    }])
  }

  function toggleChecked(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    }))
  }

  function editNameByID(id, newName) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        task.name = newName
      }
      return task
    }))
  }

  function deleteTodoByID(id){
    setTasks(tasks.filter(task=>task.id!=id))
  }

  function countByType(type) {
    setFilter(type)
  }

  return (
    <div className='app'>
      <h1>TodoMatic</h1>
      <Form addTodo={addTodo} countByType={countByType} />
      <h4>{tasks.filter(filterMap[filter]).length} tasks remaining</h4>
      {tasks.filter(filterMap[filter]).map(task => 
      <Todo key={task.id} id={task.id} name={task.name} done={task.done} toggleChecked={toggleChecked} editNameByID={editNameByID} deleteTodoByID={deleteTodoByID}>

      </Todo>)}
    </div>
  );
}

export default App;
