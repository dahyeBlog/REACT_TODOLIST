import { createSlice } from "@reduxjs/toolkit";
// createSlice를 지정해 createReducer와 createAction 등의 기능을 제공해주는 객체역할을 한다.

let id = 0;

let initialState = [
  { id: 100, text: "React 프로젝트 만들기", complete: false },
];

export const todoSlice = createSlice({
  name: "todos", // 리듀서의 이름을 지정하자.
  initialState: initialState, // 데이터의 초기값을 지정하라.
  // reducers안에는 액션 형식을 지정해준다.
  reducers: {
    add: (state, action) => {
      id++;
      state.push({
        id: id,
        text: action.payload,
        complete: false,
      });
    },

    remove: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
    reset: (state) => {
      return (state = []);
    },
    complete: (state, action) => {
      return state.map((e) =>
        e.id === action.payload ? { ...e, complete: !e.complete } : e
      );
      // checkbox가 선택이 되어 state 값을 전달 받았다면 다음과 같이 id를 비교 후 해당 값의 complete 값을 반대값으로 변경한다.
    },
  },
});

export const { add, remove, reset, complete } = todoSlice.actions;
// store에 add,remove,complete 액션을 내보낸다.
export default todoSlice.reducer;
