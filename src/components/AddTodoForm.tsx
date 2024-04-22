import React,{useState} from 'react';
import { FormControl, Input, Button } from '@chakra-ui/react';

interface props{
    addTodo : (task:string)=>void;


}

function AddTodoForm({addTodo}:props):JSX.Element{
    const [task,setTask] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!task.trim()) return;
        addTodo(task);
        setTask('');


            }
    return(
    <form onSubmit={handleSubmit}>
        <FormControl>
            <Input
            type='text'
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            placeholder='Add a new task'
            className='input'

            />
            <Button type='submit'>Add Task</Button>
        </FormControl>

    </form>
    )
}
export default AddTodoForm;