import React,{useState} from 'react';
import { FormControl, Input, Button } from '@chakra-ui/react';
import '../App.css'

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
        <FormControl className='form'>
            <Input 
            type='text'
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            placeholder='Add a new task'
            className='todo-input'

            />
            <Button className='todo-add-button' type='submit' colorScheme='green' size='lg'>Add Task</Button>
        </FormControl>

    </form>
    )
}
export default AddTodoForm;