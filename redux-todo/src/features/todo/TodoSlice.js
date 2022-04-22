import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "./Todo";

export const TodoSlice = createSlice({
    name: 'Todo',
    initialState: {
        TodoList: [],

    },
    reducers: {

        addTodo: (state, action) => {
            console.log(action)
            state.TodoList.push(action.payload)


        }
    }
})


// creat add  to do reducer
// creat selector and export that for the todo list
//export the action add todo 
export const { addTodo } = TodoSlice.actions
export default TodoSlice.reducer