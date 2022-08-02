import React from "react";

function ToDoItem(props){
    return <li onClick={props.removeText}>{props.text}</li>;
} 

export default ToDoItem;