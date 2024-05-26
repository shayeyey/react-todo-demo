import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";
let initialTasks = [
  {
    id: "0",
    name: "Eat",
    done: false,
  },
  {
    id: "1",
    name: "Sleep",
    done: true,
  },
  {
    id: "2",
    name: "Repeat",
    done: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialTasks,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nanoid(),
        name: action.payload.val,
        done: false,
      });
    },
    toggleChecked: (state, action) => {
      console.log(action.payload)
      state = state.map((task) => {
        if (task.id === action.payload.id) {
          task.done = !task.done;
        }
        return task;
      });
    },
    editNameByID: (state, action) => {
      console.log(action.payload)
      state = state.map((task) => {
        if (task.id === action.payload.id) {
          task.name = action.payload.newName;
        }
        return task;
      });
    },
    deleteTodoByID: (state, action) => {
      state = state.filter((task) => task.id != action.payload.id);
    },
  },
});

export const { addTodo, toggleChecked, editNameByID, deleteTodoByID } =
  taskSlice.actions;
export default taskSlice.reducer;
