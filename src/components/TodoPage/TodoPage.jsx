import "./TodoPage.css";

function TodoPage() {

    ///added task...
    function taskAdded() {
        alert("Task added successfully!!");
    }

    //cancel for task....

    function cancelTask() {
        document.getElementById("list").style.display = "none"
    }


    // Click for close...
    function clickForClose(){
        document.getElementById("list").style.display="none"
    }
    return (
        <div className="todoList" id="list">
            <h1>Add TODO</h1>
            <label htmlFor="">Title</label>
            <input type="text" placeholder="" className="title" />
            <label htmlFor="">Status</label>
            <select name="list" className="list">
                <option value="incomplete">Incomplete</option>
                <option value="complete">Completed</option>
            </select>

            <div className="button3">
                <button className="left_button" onClick={taskAdded}>Add Task</button>
                <button className="right" onClick={cancelTask}>cancel</button>
            </div>

            <div className="close" onClick={clickForClose}>
                <h3>X</h3>
            </div>
        </div>
    )
}

export default TodoPage;