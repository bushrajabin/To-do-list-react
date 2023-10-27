import { useEffect, useState } from "react";
import "./TodoPage.css";

function TodoPage({ setIsOpen }) {

    const [title, setTitle] = useState('')
    const [status_, setStatus_] = useState('')

    function randomId() {
        let id = '';
        for (let i = 0; i < 6; i++) {
            id += Math.floor(Math.random() * 10);
        }
        return id;
    }


    ///added task...
    function onAddTask() {
        // console.log(setIsDiv)
        const todos = [];
        const todo = {
            title: title, status_: status_, id: randomId()
        }
        if (title == "" || status_ == "") {
            alert("Please fill both!!")

        } else {
            if (JSON.parse(localStorage.getItem('todos'))) {
                const pereviosTodos = JSON.parse(localStorage.getItem('todos'))
                pereviosTodos.push(todo)
                localStorage.setItem("todos", JSON.stringify(pereviosTodos))
                setIsOpen(false)

            } else {
                todos.push(todo);
                localStorage.setItem("todos", JSON.stringify(todos))

            }
        }
    }

    //cancel for task....

    function oncancel() {
        setIsOpen(false)
    }

    // Click for close...
    function onClose() {
        setIsOpen(false)
    }
    return (
        <div className="container">
            <div className="todoList" id="list">
                <h1>Add TODO</h1>
                <label htmlFor="">Title</label>
                <input type="text" placeholder="" className="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="">Status</label>
                <select name="status" className="list" value={status_} onChange={(e) => setStatus_(e.target.value)}>
                    <option >Choose Status</option>
                    <option value="incomplete" >Incomplete</option>
                    <option value="complete">Completed</option>
                </select>

                <div className="button3">
                    <button className={`${title == "" || status_ == "" ? `active_left_button` : `left_button`}`} onClick={onAddTask} >Add Task</button>
                    <button className="right" onClick={oncancel}>Cancel</button>
                </div>

                <div className="close" onClick={onClose} >
                    <h3>X</h3>
                </div>
            </div>
        </div>
    )
}

export default TodoPage;