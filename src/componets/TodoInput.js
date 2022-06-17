import React, { useState } from 'react';

import './Todo.css';

const TodoInput = ({ createTodo }) => {

    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(task);
        setTask("");
    };

    return (
        <div>
            <div className="main-div">
                <div className="input-data">
                    <div style={{ backgroundColor: 'rgb(24, 22, 22)' }}>
                        <input
                            type="text"
                            placeholder="Enter Task"
                            id="task"
                            name="task"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                    </div>
                    <button title="Add Iteam" onClick={handleSubmit}>Add-This-Item</button>
                </div>
            </div>
        </div>
    );
}

export default TodoInput;
