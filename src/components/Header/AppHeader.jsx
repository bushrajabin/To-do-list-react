import "./AppHeader.css"
function AppHeader() {
//function for show todo list
    function addTaskList(){
        document.getElementById("list").style.display="flex"
    }
    return (

        <div className="appheader">

            <div className="top">
                <h1>TODO LIST</h1>
            </div>

            <div className="task">
            <div className="button1">
                <button onClick={addTaskList}>
                    Add Task
                </button>
            </div>

            <div className="button2">
                <select name="list">
                    <option value="all">All</option>
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Completed</option>
                </select>
            </div>
            </div>
         

        </div>
    );
}

export default AppHeader;