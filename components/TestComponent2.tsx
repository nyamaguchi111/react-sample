import React, { useState , useEffect } from "react";
import styled from "styled-components";
const App = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('走った！')
  });
  return (
    <>
      <h2> {props.title} </h2>
      <p> {count} </p>
      <button onClick={() => setCount(count + 1)} style={style}>click</button>
    </>
  );
};
const style = {
  backgroundColor: "red",
  width: "100px",
  borderRadius: 5,
};
export default App;