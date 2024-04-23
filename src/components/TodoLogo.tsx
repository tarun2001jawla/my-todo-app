import React from 'react';
import Logo from '../assets/To-Do-Logo 1.png'
import '../App.css'

const TodoLogo : React.FC =()=>{
    return(
        <div className="logo">
            
            <img className="to-do-logo-1-icon" alt="" src={Logo} ></img>
        </div>
    )
}
export default TodoLogo;