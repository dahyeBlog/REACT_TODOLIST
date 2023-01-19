import TodoListForm from "./Components/TodoListForm/TodoListForm";
import TodoList from "./Components/TodoList/TodoList";

function App() {

  return (
    <>
      <div className="container">
        <h2 className="text_title">TodoList</h2>

        <TodoListForm />
        <TodoList />
      </div>
    </>
  );
}

export default App;
