import 'bootstrap/dist/css/bootstrap.min.css'
import AppName from './Component/AppName'
import AddTodo from './Component/AddTodo';
import "./App.css"
import TodoItem from './Component/Todoitem';
const App = () => {
  return (
    <>
     <div className="container mt-5">
      <AppName />
      <AddTodo />
      <TodoItem task="Buy Milk" date="4/1/2023" />
      <TodoItem task="Go To College" date="4/10/2024" />
    </div>
    </>
  )
}

export default App