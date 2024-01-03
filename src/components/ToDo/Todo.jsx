const ToDo = ({ todo, handleCheckCompleted, handleDelete }) => {
  return (
    <li className="list-group-item">
      <div className="row justify-content-between">
        <div className="col-10">
          <input
            className="form-check-input me-2"
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckCompleted(todo.id)}
          />
          {todo.title}
        </div>
        <div className="col">
          <button
            type="button"
            disabled={!todo.completed}
            className="btn-close"
            aria-label="Close"
            onClick={() => handleDelete(todo.id)}
          ></button>
        </div>
      </div>
    </li>
  );
};
export default ToDo;
