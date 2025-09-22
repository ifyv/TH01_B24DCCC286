import React, { useState } from "react";
function TodoList({ todos, onDelete }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => onDelete(index)}>Xóa</button>
                </li>
            ))}
        </ul>
    );
}
function AppBai1() {
    const [task, setTask] = useState("");       
    const [todos, setTodos] = useState([]);    

    const addTask = () => {
        if (task.trim() === "") return; 
        setTodos([...todos, task]);
        setTask(""); 
    };

    const deleteTask = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div>
        <h2>Quản lý công việc</h2>
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Nhập công việc..."
        />
        <button onClick={addTask}>Thêm</button>
        <TodoList todos={todos} onDelete={deleteTask} />
        </div>
    );
}

export default AppBai1;