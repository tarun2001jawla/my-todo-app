import "./App.css";

import React, { useState , useEffect} from "react";
import { Box, Container,Heading} from "@chakra-ui/react"; // Import Chakra UI components
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

interface Todo {
  task: string;
  completed: boolean;
}

function App() {
  const todoItems = JSON.parse (localStorage.getItem('todo') || '[]');
  console.log(todoItems)
  const [todo, setTodos] = useState<Todo[]>(todoItems);

  useEffect(()=>{
    localStorage.setItem('todo',JSON.stringify(todo))
   
  },[todo])
  const addTodo = (task: string): void => {
    setTodos([...todo, { task, completed: false }]);
  };
  console.log(localStorage);
  const deleteTodo = (index: number): void => {
    setTodos(todo.filter((todo, i) => i !== index));
  };

  const markComplete = (index:number):void=>{
          const updatedTodos = [...todo];
          updatedTodos[index].completed = !updatedTodos[index].completed;

          setTodos(updatedTodos);
          }

  return (
    <Container className="todo-container">

    
<Box p={8} borderWidth={1} borderRadius="md" shadow="lg" bg="gray.100">
        <Heading className="todo-heading" as="h1" mb={4} textAlign="center" color="blue.600">
          Todo App
        </Heading>
        <AddTodoForm addTodo={addTodo} />
        <TodoList todos={todo} deleteTodo={deleteTodo} markComplete={markComplete} />
      </Box>
    </Container>
  );
}

export default App;
