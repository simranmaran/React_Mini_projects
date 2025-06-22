// App.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToTask, deleteTask } from './todoSlice';
import './App.css'; 

const App = () => {
  const [txt, setTxt] = useState("");
  const Data = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const trimmedText = txt.trim();
    if (trimmedText !== "") {
      dispatch(addToTask({ work: trimmedText }));
      setTxt("");
    }
  };

  return (
    <>
      <h1>My Todo List</h1>
      <div>
        Enter Task:{" "}
        <input
          type="text"
          value={txt}
          placeholder="Enter a task"
          onChange={(e) => setTxt(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <hr />

      <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '60%' }}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.work}</td>
              <td>
                <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
