

// task3 
  //  red border,   bg color ,  cybrom likha badha ho jaye esa code do teen button per click krne per yeh kam hoyeee
 

  import { useRef } from "react";

const App = () => {
  const myRef = useRef();

  const func1= () => {
    myRef.current.style.border = "3px solid red";
  };

  const func2 = () => {
    myRef.current.style.backgroundColor = "lightblue";
  };

  const func3 = () => {
    myRef.current.style.fontSize = "2rem";
    myRef.current.textContent = "CYBROM";
  };

  return (
    <>
      <button onClick={func1}>Border</button>
      <button onClick={func2}>Background Color</button>
      <button onClick={func3}>click</button>
      <div
        ref={myRef}
        style={{
          marginTop: "20px", padding: "10px",border: "1px" }}
      >
        Hello, we are React developers!
      </div>
    </>
  );
};

export default App;
