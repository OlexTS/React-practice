import { Component } from "react";

class FormToDo extends Component {
  state = {
      todo: "",
      
  };

    
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //   this.props.createUser(this.state)

    if (!this.state.todo) {
      return alert("Please enter a valid value");
    }
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Create todo
          </label>
          <input
            name="todo"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            onChange={this.handleChange}
            value={this.state.todo}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add todo
        </button>
      </form>
    );
  }
}
export default FormToDo;
