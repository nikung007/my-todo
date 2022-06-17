import React, { useState } from 'react';
import "./Todo.css";




const Todo = ({ toggleTodo, task, completed, id, removeTodo, updateTodo }) => {

    const [isEditing, setEditing] = useState(false);

    const [editTast, setEditTask] = useState(task);

    const [ok, setOk] = useState()

    const handleUpdate = (e) => {
        e.preventDefault();
        updateTodo(id, editTast);
        setEditing(false);
    }

    return (
        <div className='show'>
            {isEditing ? (
                <div>
                    <div className="update">
                        <div style={{ backgroundColor: 'rgb(24, 22, 22)' }}>
                            <input
                                type="text"
                                name="task"
                                value={editTast}
                                onChange={(e) => setEditTask(e.target.value)}
                            />
                        </div>
                        <button onClick={handleUpdate} className="bbb">Update</button>
                    </div>
                </div>

            ) : (
                <li onClick={toggleTodo}>
                    {task}
                </li>
            )
            }
            {
                isEditing ?
                    (null)
                    : (
                        <div className='bot'>
                            <button onClick={() => setEditing(true)}> Edit </button>
                            <button onClick={removeTodo}> Delete </button>
                        </div>)
            }

        </div>
    )
}

export default Todo