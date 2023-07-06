import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  /* 1.
  useEffect(() => {
    console.log("new hello created");
    // cleanup function
    return () => console.log("destroyed");
  }, []);
  */

  /* 2.
  function hiFn() {
    console.log("new hello created");
    // 컴포넌트가 파괴될 때도 function을 실행하고 싶으면, hiFn이 해당 function을 리턴하면 됨
    // 자주 사용하는 기능은 아님
    return byeFn;
  }
  function byeFn() {
    console.log("destroyed");
  }
  useEffect(hiFn, []);
  */

  /* 3. 
  useEffect(function () {
    console.log("new hello created");
    return function () {
      console.log("destroyed");
    };
  }, []);
  */

  /* 4. */
  useEffect(() => {
    console.log("new hello created");
    return () => console.log("destroyed");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setshowing] = useState(false);
  const onClick = () => setshowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
