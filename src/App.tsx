import "./App.css";

import React, { useState } from "react";
import { Box, Container,Heading} from "@chakra-ui/react"; // Import Chakra UI components
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

interface Todo {
  task: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (task: string): void => {
    setTodos([...todos, { task, completed: false }]);
  };

  const deleteTodo = (index: number): void => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const markComplete = (index:number):void=>{
          const upddatedTodos = [...todos];
          upddatedTodos[index].completed = !upddatedTodos[index].completed;

          setTodos(upddatedTodos);
          }

  return (
    <Container className="todo-container">

    
<Box p={8} borderWidth={1} borderRadius="md" shadow="lg" bg="gray.100">
        <Heading className="todo-heading" as="h1" mb={4} textAlign="center" color="blue.600">
          Todo App
        </Heading>
        <AddTodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} markComplete={markComplete} />
      </Box>
    </Container>
  );
}

export default App;
