import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function Form() {
    let [items, setItems] = useState([]);

    
    function addNewToDo(newToDo) {
        setItems((prev) => [...prev, newToDo]);
    }

    function deleteText(id) {
        setItems((prev) => prev.filter((item, index) => index !== id));
    }

    return (
        <div>
            <div className="form">
                <InputArea
                    addNewToDo={addNewToDo}
                />
            </div>
            <div>
                <ul>
                    <li>An Item</li>
                    {items.map((item, index) => (<ToDoItem
                        key={index}
                        id={index}
                        removeText={() => {
                            deleteText(index);
                        }}
                        text={item}
                    />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Form;
