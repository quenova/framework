import React from "react";

const ToDoList = ()  => {
    let todos = ["Menyapu", "Mengepel", "Memasak"];
    return(
        <div>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={index}>{todo}</li>
                    );
                })}
                
            </ul>
        </div>
    );
};

export default ToDoList;