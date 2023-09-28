import { useState } from "react";
import Title from "./components/Title/Title";
import Todoinput from "./components/Todo Input/Todoinput";
import Todo from "./components/Todo/Todo";
import TodoList from "./components/TodoList/TodoList";


function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'watch the next marvel movie',
      Completed: false,
    }, {
      id: 2,
      title: ' Record the next video',
      Completed: false,
    }, {
      id: 3,
      title: ' Wash the dishes',
      Completed: false,
    }, {
      id: 4,
      title: ' Study 2 hours',
      Completed: false,
    }
  ])

  const [activeFilter, setActiveFilter] = useState('all')
const [filteredTodos,setFilteredTodos] = useState(todos)

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      Completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList);
  }


  const handleSetComplete = (id) => {
    const updatedList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed}
      }return todo
      
    })
    setTodos(updatedList)
  }

  

  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id);
    setTodos(updatedList);
  }

  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <Todoinput addTodo={addTodo} />
        <TodoList
          todos={todos}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
