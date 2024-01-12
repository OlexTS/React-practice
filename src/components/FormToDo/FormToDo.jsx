import { useState } from "react";

const FormToDo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleChange = ({ target }) => {
    setTodo(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //   this.props.createUser(this.state)

    if (!todo) {
      return alert("Please enter a valid value");
    }
    addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Create todo
        </label>
        <input
          name="todo"
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          onChange={handleChange}
          value={todo}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add todo
      </button>
    </form>
  );
};

export default FormToDo;
