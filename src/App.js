import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, addBy, clear } from "./Store/index";

function App() {
  const selector = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increaseCounter = () => {
    dispatch(increase());
  };
  const decreaseCounter = () => {
    dispatch(decrease());
  };
  const addByValue = () => {
    dispatch(addBy(10));
  };
  const clearValue = () => {
    dispatch(clear());
  };
  return (
    <div>
      <h1>Counter</h1>
      <p>{selector}</p>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
      <button onClick={addByValue}>Addedby 10</button>
      <button onClick={clearValue}>Clear</button>
    </div>
  );
}

export default App;
