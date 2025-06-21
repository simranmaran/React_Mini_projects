const AddTodo = () => {
  return (
    <div className="row mb-3 align-items-center">
      <div className="col-6">
        <input type="text" className="form-control" placeholder="Enter Todo Here" />
      </div>
      <div className="col-4">
        <input type="date" className="form-control" />
      </div>
      <div className="col-2">
        <button className="btn btn-success w-100">Add</button>
      </div>
    </div>
  );
};

export default AddTodo;
