import React from "react";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import { BsPencilFill } from "react-icons/bs";
import { RiDeleteBinFill } from "react-icons/ri";
import { complete, remove, reset } from "../../redux/todoSlice";

function TodoList() {
  const dispatch = useDispatch(); // useDispatch를 이용해 complete 메서드에 complete, remove, update에 해당 정보를 전달한다.
  const todolist = useSelector((state) => state.todo);
  // useSeletor을 통해 현재 reducer에 입력된 todo값을 가져온다.

  const deleteAllHandler = () => {
    dispatch(reset());
  };

  const todolistItems = todolist.map((todo, index) => (
    <li key={index}>
      <>
        {todo.complete === false ? (
          todo.text
        ) : (
          <div className="completedTodo">{todo.text}</div>
        )}
      </>

      <div className="changeTodoList">
        <input type="checkbox" onChange={() => dispatch(complete(todo.id))} />

        <RiDeleteBinFill
          onClick={() => dispatch(remove(todo.id))}
          className="iconDelete"
        />
      </div>
    </li>
  ));

  return (
    <>
      <div className="todolist_items">
        <ul>{todolistItems}</ul>
      </div>
      <button onClick={deleteAllHandler} className="delete_btn">
        Delete All
      </button>
    </>
  );
}

export default TodoList;
