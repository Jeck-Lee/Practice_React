import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  // create react app을 사용하기 때문에 React.를 적어줄 필요 없음
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("i run all the time");
  // 최초 렌더링 이후에는 state 값이 변해도 rerendering 되지 않도록 해줌
  // -> 코드가 한 번만 실행될 수 있도록 보호해줌 (ex. API)
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
