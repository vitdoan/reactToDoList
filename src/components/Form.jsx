import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function Form(){
    let [newToDo,setNewToDo] = useState("");
    let [items,setItems] = useState([]);

    function updateTodo(event){
        const newValue = event.target.value;
        setNewToDo(newValue);
    }
    function addNewToDo(){
        setItems((prev)=>([...prev,newToDo]));
        setNewToDo("");
    }

    return <div>
        <div className="form">
			<input value={newToDo} onChange={updateTodo} type="text" />
			<button>
			<span onClick={addNewToDo}>Add</span>
			</button>
		</div>
		<div>
			<ul>
			<li>An Item</li>
            {items.map(i => <ToDoItem text={i}/>)}
			</ul>
		</div>
    </div>
}

export default Form;