import { Component } from "react";
import ToDo from "../ToDo/Todo";

class ToDoList extends Component{
    render() {
        return <>
				<h1>My To-Do list</h1>
				<ul className='list-group list-group-flush'>
					{this.state.todoList.map((todo) => (
						<ToDo
							key={todo.id}
							todo={todo}
							
						/>
					))}
				</ul>
			</>

    }
}
export default ToDoList