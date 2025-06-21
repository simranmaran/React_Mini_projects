import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from './Features/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
      dispatch(increment());
  }

  function handleDecrementClick() {
      dispatch(decrement());
  }

  function handleResetClick() {
      dispatch(reset());
  }

  function handleIncAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container'>
        <button onClick={handleIncrementClick}> + </button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}> - </button>
        <br/>
        <br/>
        <button onClick={handleResetClick}> Reset </button>
        <br/>
        <br/>
        <input 
          type='Number'
          value={amount}
          placeholder='Enter Amount'
          onChange={(e) => setAmount(e.target.value)}
         />
         <br/>
        <br/>
        <button onClick={handleIncAmountClick}> Inc by Amount </button>
    </div>
  )
}

export default App