import React from 'react';
import TodoInput from './TodoInput';
import Todo from "./Todo"
import "./Todo.css";
import { completeTodo, addTodo, removeTodo, updateTodo } from '../redux/action';
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {

    const state = useSelector((state) => ({ ...state.todos }));
    console.log("state", state)
    let dispatch = useDispatch();

    const create = (newTodo) => {
        dispatch(addTodo(newTodo));
    };

    const update = (id, updatedTask) => {
        dispatch(updateTodo({ id, updatedTask }))
    }

    return (
        <div>
            <div className="hedding">
                <h1>To-Do-List-Day</h1>
            </div>
            <TodoInput createTodo={create} />
            <ul className='show'>
                <div className='main-div-peta '>
                    {state.todos && state.todos.map((todo) => {
                        return (
                            <Todo
                                key={todo.id}
                                id={todo.id}
                                task={todo.task}
                                completed={todo.completed}
                                toggleTodo={() => dispatch(completeTodo(todo))}
                                removeTodo={() => dispatch(removeTodo(todo))}
                                updateTodo={update}
                            />
                        )
                    })}
                </div>
            </ul>
        </div>
    );
}

export default TodoList;
