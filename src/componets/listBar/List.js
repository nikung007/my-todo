import React, {useEffect, useState} from "react";
import TodoList from "./TodoList"

import "./List.css";

function List(){

    const [task, setTasks] = useState([]);

    const [inputTex,setInputTex]=useState();

    const [inputTexPlace,setInputTexPlace]=useState();

    const change1 = (e) => {
            setInputTex(e.target.value);
    }
    const change2 = (e) => {
        setInputTexPlace(e.target.value);
    }

    const listAdd = () =>{
            if(inputTex !== ''&& inputTexPlace !== '')
            {
                const newTask = {
                    input:inputTex,
                    place:inputTexPlace
                }
                setTasks([...task,newTask]);
                setInputTex('');
                setInputTexPlace('');
            }
        }

    const edit = (tasks,index) =>{
       const h = index;
        setInputTex(tasks.input);
        setInputTexPlace(tasks.place);
        const editData = task.filter()
        console.log(editData)
    }

    return(
        <div>
            <div className="listTodo">
                <span>Enter Your Work</span>
                <input type="text" placeholder="Enter a Work" value={inputTex} onChange={change1} id="texList"/>
                <span>Enter Your Place</span>
                <input type="text" placeholder="Enter a Place" value={inputTexPlace} onChange={change2} id="texPlace" />
                <button onClick={listAdd}>Submit</button>
            </div>
            <div>
                <TodoList task={task} def={setTasks} edit={edit} />
            </div>
        </div>
    )
}
export default List;