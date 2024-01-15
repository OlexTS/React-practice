import { useEffect, useState } from "react";
import ToDo from "../ToDo/Todo";
// import todo from "../../todo.json";
import FormToDo from "../FormToDo/FormToDo";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

/*
  |==============================
  | COMPONENT ON HOOKS
  |==============================
*/

const ToDoList = () => {
  const [todoList, setTodoList] = useState("");

  useEffect(() => {
    const localTodo = localStorage.getItem("todo");
    if (localTodo) {
      setTodoList(JSON.parse(localTodo));
    }
  }, []);

  useEffect(() => {
    todoList && localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  const handleCheckCompleted = (id) => {
    setTodoList((prevState) => {
      return prevState.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };
  const handleDelete = (id) => {
    setTodoList((prevState) => prevState.filter((todo) => todo.id !== id));
    toast.success('Todo was successfully deleted!');
  };
  const handleAddTodo = (todo) => {
    setTodoList((prevState) => {
      return [
        ...prevState,
        {
          id: nanoid(),
          title: todo,
          completed: false,
        },
      ];
    });
    toast.success("Todo was successfully created!");
  };

  return (
    <>
      <h1>My To-Do list</h1>
      {/* {isDelete && (
          <div className="alert alert-danger" role="alert">
            Todo was successfully deleted!
          </div>
        )}
        {isCreate && (
          <div className="alert alert-success" role="alert">
            Todo was successfully created!
          </div>
        )} */}
      <FormToDo addTodo={handleAddTodo} />
      {todoList && (
        <ul className="list-group list-group-flush">
          {todoList.map((todo) => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={handleCheckCompleted}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
};

/*
  |==============================
  | CLASS COMPONENT
  |==============================
*/

// class ToDoList extends Component {
//   state = {
//     todoList: '',
//     isDelete: false,
//     isCreate: false,
//   };
//   componentDidMount() {
//     if (localStorage.getItem('todo')) {
//       this.setState({todoList: JSON.parse(localStorage.getItem('todo'))})
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.todoList.length > this.state.todoList.length) {
//       localStorage.setItem('todo', JSON.stringify(this.state.todoList))
//       this.setState({ isDelete: true });
//       setTimeout(() => {
//         this.setState({ isDelete: false });
//       }, 2000);
//     }
//     if (prevState.todoList.length < this.state.todoList.length) {
//             localStorage.setItem('todo', JSON.stringify(this.state.todoList))
//       this.setState({ isCreate: true });
//       setTimeout(() => {
//         this.setState({ isCreate: false });
//       }, 2000);
//     }
//   }

//   handleCheckCompleted = (id) => {
//     this.setState((prevState) => ({
//       todoList: prevState.todoList.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       ),
//     }));
//   };
//   handleDelete = (id) => {
//     this.setState((prevState) => ({
//       todoList: prevState.todoList.filter((todo) => todo.id !== id),
//     }));
//   };
//   handleAddTodo = (todo) => {
//     this.setState((prevState) => {
//       return {
//         todoList: [
//           ...prevState.todoList,
//           {
//             id: nanoid(),
//             title: todo,
//             completed: false,
//           },
//         ],
//       };
//     });
//   };
//   render() {
//     const { isDelete, isCreate } = this.state;
//     return (
//       <>
//         <h1>My To-Do list</h1>
//         {isDelete && (
//           <div className="alert alert-danger" role="alert">
//             Todo was successfully deleted!
//           </div>
//         )}
//         {isCreate && (
//           <div className="alert alert-success" role="alert">
//             Todo was successfully created!
//           </div>
//         )}
//         <FormToDo addTodo={this.handleAddTodo} />
//         {this.state.todoList&&<ul className="list-group list-group-flush">
//           {this.state.todoList.map((todo) => (
//             <ToDo
//               key={todo.id}
//               todo={todo}
//               handleCheckCompleted={this.handleCheckCompleted}
//               handleDelete={this.handleDelete}
//             />
//           ))}
//         </ul>}
//       </>
//     );
//   }
// }
export default ToDoList;
