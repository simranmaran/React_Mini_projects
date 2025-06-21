import { useSelector, useDispatch } from "react-redux";
import { bgcolorChange } from "./colorSlice";

const App = () => {
  const myclr = useSelector(state => state.mycolor.color);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Welcome</h1>
      <button onClick={() => dispatch(bgcolorChange())}>Click Here</button>
      <div style={{ width: '200px', height: '200px', backgroundColor: myclr }}>
      </div>
    </>
  );
};

export default App;
