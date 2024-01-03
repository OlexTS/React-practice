import { Component } from "react";
import ToDo from "../ToDo/Todo";
import todo from "../../todo.json";
import FormToDo from "../FormToDo/FormToDo";
import { nanoid } from "nanoid";

class ToDoList extends Component {
  state = {
    todoList: todo,
    isDelete: false,
    isCreate: false
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoList.length > this.state.todoList.length) {
      this.setState({ isDelete: true })
      setTimeout(()=>{this.setState({isDelete:false})},2000)
    } if (prevState.todoList.length < this.state.todoList.length) {
      this.setState({ isCreate: true });
      setTimeout(()=>{this.setState({isCreate:false})},2000)
    } 
    
  }

  handleCheckCompleted = (id) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };
  handleDelete = (id) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter((todo) => todo.id !== id),
    }));
  };
  handleAddTodo = (todo) => {
    this.setState((prevState) => {
      return {todoList: [
        ...prevState.todoList,
        {
          id: nanoid(),
          title: todo,
          completed: false,
        },
      ]}
    });
  };
  render() {
    const{isDelete, isCreate}=this.state
       return (
      <>
           <h1>My To-Do list</h1>
           {isDelete&&<div class="alert alert-danger" role="alert">
  Todo was successfully deleted!
</div>}
           {isCreate&&<div class="alert alert-success" role="alert">
  Todo was successfully created!
</div>}
        <FormToDo addTodo={this.handleAddTodo} />
        <ul className="list-group list-group-flush">
          {this.state.todoList.map((todo) => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={this.handleCheckCompleted}
              handleDelete={this.handleDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}
export default ToDoList;
