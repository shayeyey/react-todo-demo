/*
 * @Descripttion:
 * @version:
 * @Author: shaye
 * @Date: 2024-05-26 18:13:04
 * @LastEditors: shaye
 * @LastEditTime: 2024-05-26 19:04:51
 */
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducer/taskReducer";

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
