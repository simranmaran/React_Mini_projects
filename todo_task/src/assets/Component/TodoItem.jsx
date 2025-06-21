const TodoItem = ({ task, date }) => {
  return (
    <div className="row mb-2 align-items-center">
      <div className="col-6">{task}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button className="btn btn-danger w-100">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
