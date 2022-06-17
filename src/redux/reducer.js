
import * as types from "./actionType";


const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            const newTodo = {
                id: new Date().getTime().toString(),
                task: action.payload,
            };
            const addTodos = [...state.todos, newTodo];
            return {
                ...state,
                todos: addTodos,
            }
        case types.REMOVO_TODO:
            const filterTodo = state.todos.filter((f) => f.id !== action.payload.id);
            return {
                ...state,
                todos: filterTodo,
            }
        case types.UPDATE_TODO:
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, task: action.payload.updatedTask };
                }
                return todo;
            });
            return {
                ...state,
                todos: updatedTodos,
            }
        case types.COMPLETE_TODO:
            const toggleTodos = state.todos.map((t) =>
                t.id === action.payload.id
                    ? { ...action.payload, completed: !action.payload.completed }
                    : t
            );
            return {
                ...state,
                todos: toggleTodos,
            };
        default:
            return state;
    }
}

export default todoReducer;