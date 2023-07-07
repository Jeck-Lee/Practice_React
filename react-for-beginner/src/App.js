import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    // state가 const 변수이므로 직접 수정할 수 없음 (ex.todos.push("element");)
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };
  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {
          // Array 안의 모든 element에 대해 실행되고, 실행된 값의 결과로 이뤄진 새로운 Array를 return
          todos.map((item, index) => (
            // Each child in a list should have a unique "key" prop.
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
