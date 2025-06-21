import { useSelector, useDispatch } from "react-redux";
import { bgcolorChange } from "./colorSlice";
import { useState } from "react";

const App = () => {
  const myclr = useSelector((state) => state.mycolor.color);
  const dispatch = useDispatch();
  const [txtval, setTxtVal] = useState("");

  return (
    <>
      <h1>Welcome</h1>
      Enter Color: 
      <input 
        type="text" 
        value={txtval} 
        onChange={(e) => setTxtVal(e.target.value)} 
      />
      <button onClick={() => dispatch(bgcolorChange(txtval))}>Click Here</button>

      <div style={{ width: '200px', height: '200px', backgroundColor: myclr }}>
      </div>
    </>
  );
};

export default App;
