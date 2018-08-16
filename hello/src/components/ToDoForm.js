import React from 'react';
 
const ToDoForm =(props)=>{
    return(
    
    <div>
        <h1>Add catagories</h1>

        <form onSubmit={props.addTask}>
            <input type="text" value={props.currentTask} onChange={props.updateTask}/>
            <button type="submit" >Submit</button>
        </form>
    </div>
)
}
export default ToDoForm;