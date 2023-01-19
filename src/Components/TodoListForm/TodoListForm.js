import React, { useState } from "react";
import "./TodoListForm.css";
import { AiFillFile } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { add } from "../../redux/todoSlice";

const TodoListForm = () => {
  const dispatch = useDispatch();
  const [todoList, setTodoList] = useState({
    id: 0,
    text: "",
  });

  const inputTextHandler = (e) => {
    setTodoList({ text: e.target.value });
  };

  const todoListSubmitHandler = (e) => {
    e.preventDefault();
    if (todoList.text !== "") {
      dispatch(add(todoList.text));
      // dispatch를 통해 값을 todoSlice에 지정한 add 함수로 넘긴다.
    } else {
      alert("오늘의 할일을 입력해주세요. ⭐️");
    }
    setTodoList({ text: "" }); // 입력이 완료 되었으면 input 안에 값을 리셋함.
  };

  return (
    <>
      <form onSubmit={todoListSubmitHandler}>
        <div className="form_container">
          <div className="form_input">
            <input
              value={todoList.text}
              onChange={inputTextHandler}
              type="text"
              name="todolist"
            />
            <span>
              <AiFillFile />
            </span>
          </div>

          <button type="submit" className="add_btn">
            Add new task
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoListForm;
