import React, {useState} from "react";

function InputArea(props) {
    let [newToDo, setNewToDo] = useState("");

    function updateTodo(event) {
        const newValue = event.target.value;
        setNewToDo(newValue);
    }
    return (
        <div>
            <input
                value={newToDo}
                onChange={updateTodo}
                type="text"
            />
            <button>
                <span onClick={()=>{
                    props.addNewToDo(newToDo);
                    setNewToDo("");
                }}>Add</span>
            </button>
        </div>
    );
}

export default InputArea;
