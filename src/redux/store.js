import { configureStore } from "@reduxjs/toolkit";
import todoSlice  from "./todoSlice";

// configureStore로 store를 생성함.
// 객체 형태 안에는 반드시 reducer가 있어야함.
export default configureStore({
  reducer:{
    todo: todoSlice
  }
})
