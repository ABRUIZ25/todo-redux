//nec ompenent
//import the todo action to do cratinon actioon 
//need input fields to to create the new todo 
//dispatch siad todo creation action 


import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodo } from "./TodoSlice";



export function Todo() {
    const dispatch = useDispatch()
    const [NewTodo, setNewTodo] = useState("")
    return (
        <div>
            Create New Todo
            <div>
                Item: <input value={NewTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
            </div>
            <div>
                <button onClick={() => { dispatch(addTodo(NewTodo)) }}>Add</button>
            </div>
        </div>)
}