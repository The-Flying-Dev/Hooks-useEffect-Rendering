import { useState, useEffect } from "react";


const Main = () => {

  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect1 ran');
    //adding empty dependency array causes the useEffect to only be run once
  }, []);

  useEffect(() => {
    console.log('useEffect2 ran');
    if(toggleTwo)
      console.log('toggleTwo slice of state is TRUE so this code runs');
    if(!toggleTwo)
      console.log('toggleTwo slice of state is FALSE so this code runs');
  }, [toggleTwo]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
      }, 1000);
    return () => {
      console.log(
        `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
      );
      clearInterval(myInterval);
    };
    
  }, [count]);

  //if data changes in the useEffect dependency array, the component will re-render
  return (
    <div>
      {console.log('rendered or re-rendered')}
      <h1>Main Component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>ToggleTwo</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>{count}</button>
    </div>
  );
};

export default Main;

