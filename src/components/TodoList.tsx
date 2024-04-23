import React from "react";
import TodoItem from "./TodoItem";
import { List } from "@chakra-ui/react";
import '../App.css'

interface Todo {
  task: string;
  completed: boolean;
}

interface props {
  todos: Todo[];
  deleteTodo: (index: number) => void;
  markComplete: (index: number) => void;
}

function TodoList({ todos, deleteTodo, markComplete }: props): JSX.Element {
  return (
    <List styleType="none" className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          markComplete={markComplete}
        />
      ))}
    </List>
  );
}

export default TodoList;