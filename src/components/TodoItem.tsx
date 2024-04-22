import React from "react";
import { List, ListItem, Checkbox, Button } from '@chakra-ui/react';

interface Todo {
  task: string;
  completed: boolean;
}

interface props {
  index: number;
  todo: Todo;
  deleteTodo: (index: number) => void;
  markComplete: (index: number) => void;
}

const TodoItem = ({index,todo,deleteTodo,markComplete}:props):JSX.Element=>{
    return(
        <List>
        <ListItem>
            <Checkbox
            isChecked = {todo.completed}
            onChange={()=>markComplete(index)}
            />
            <span style={{textDecoration:todo.completed ? 'line-through' : 'none'}}>
                {todo.task}

            </span>
            <Button onClick={() => deleteTodo(index)}>Delete</Button>
        </ListItem>
        </List>
    )
}
export default TodoItem;