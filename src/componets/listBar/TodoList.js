import React, {useState} from "react";
import "./TodoList.css"
function TodoList(props) {
    const {task,def,edit,up}=props
    const editData =(tasks,index) =>{
        edit(tasks,index)
    }
    const upDate = (index) =>{
        up(index)
    }
    const del = (index) =>{
        const newTask = [...task]
        newTask.splice(index,1)
        def(newTask);
    }

    return(
        <div>
            <div className="listTodo">
                <ol>
                    {task.map((tasks,index)=>
                        <li key={index}>
                            <input type="text" value={tasks.input}/>
                            <input type="text" value={tasks.place}/>
                            <button onClick={()=>editData(tasks,index)}>Edit</button>
                            <button onClick={del}>Delete</button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}
export default TodoList;