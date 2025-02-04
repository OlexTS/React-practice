import React, { Suspense} from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ToDo from "./Todo";
import { useSelector } from "react-redux";

const TodoDetails = () => {
  const params = useParams();
const {todo: todoList}= useSelector(state=>state.todo)
  // const [todoList, setTodoList] = useState(null);
  const location = useLocation()
  console.log(location);

  // useEffect(() => {
  //   const localTodo = localStorage.getItem("todo");
  //   if (localTodo) {
  //     setTodoList(JSON.parse(localTodo));
  //   }
  // }, []);

  return (
    <Suspense>
      <Link to={location.state } className="btn btn-secondary m-2">Go Back</Link>
      {todoList?.map(
        (todo) => todo.id === params.id && <ToDo key={todo.id} todo={todo} />
      )}
    </Suspense>
  );
};

export default TodoDetails;
