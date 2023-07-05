import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  // create react app을 사용하기 때문에 React.를 적어줄 필요 없음
  const [counter, setCounter] = useState(0);
  const [searchText, setSearchText] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setSearchText(event.target.value);
  console.log("I run all the time");
  // 최초 렌더링 이후에는 state 값이 변해도 rerendering 되지 않도록 해줌
  // -> 코드가 한 번만 실행될 수 있도록 보호해줌 (ex. API)
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  // 이 코드는 지정한 searchText가 변화할 때만 실행됨
  // -> React가 지정한 키워드를 지켜보고 있다가, 해당 키워드가 변화할 때만 실행해주는 것. 따라서 배열을 비워두면 지켜볼 게 없으므로 한 번만 실행됨.
  useEffect(() => {
    if (searchText !== "") {
      console.log("I run when 'searchText' changes");
    }
  }, [searchText]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'searchText' & 'counter' change");
  }, [searchText, counter]);

  return (
    <div>
      <input
        value={searchText}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
