import { configureStore } from '@reduxjs/toolkit'
import TodoReducer, { addTodo } from '../features/todo/TodoSlice'

export const store = configureStore({
    reducer: {
        todo: TodoReducer,

    }
})