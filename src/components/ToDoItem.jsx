import React, { useState } from "react";

function ToDoItem(props){
    let [isCrossed,setCross] = useState(false);

    function crossText(){
        setCross(!isCrossed);
    }

    return <li onClick={crossText} style={{textDecoration: isCrossed? "line-through" : "none"}}>{props.text}</li>;
} 

export default ToDoItem;