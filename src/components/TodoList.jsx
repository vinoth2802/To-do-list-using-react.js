import React from "react";
import { useState } from "react";
import './TodoList.css';

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInput = (event) => {
        setNewTask(event.target.value);
    }
    const addTask = () => {
        if(newTask != "")
        {
            const task = {
                id : todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
                name : newTask,
                isCompleted : false
            };
            setTodoList([...todoList , task]);
            setNewTask("");
        }
    }

    const deleteTask = (taskid) => {
        setTodoList(todoList.filter((task) => task.id != taskid));
    }

    const handleComplete = (id) => {
        setTodoList(todoList.map((task) => {
            if(task.id === id)
                return {...task, isCompleted: true};
            else
                return task;
        }));
    }

    return (
        <div className="list">
            <h2>To-Do List</h2>
        <div className="addtask">
            <input type="text" value={newTask} onChange={handleInput}/>
            <button onClick={addTask}>+ Add task</button>
        </div>
        <div className="todolist">
            {todoList.map((task) => {
                return (
                    <div className="task" style={{backgroundColor : task.isCompleted ? "#70e000" : "#edf2f4" }}>
                        <p >{task.name}</p>
                        <button className="complete" onClick={() => handleComplete(task.id)}>{task.isCompleted ? "Completed" : "Complete"}</button>
                        <button className="delete" onClick={() => deleteTask(task.id)}>X</button>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default TodoList;