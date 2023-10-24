import { useState } from "react";
import "./AppHeader.css"
function AppHeader({setIsOpen}) {

    //function for show todo list
    function onOpenModal() {
        setIsOpen(true)
    }
    return (
        <>
            {
                 <div className="appheader" id="app">

                    <div className="top">
                        <h1>TODO LIST</h1>
                    </div>

                    <div className="task">
                        <div className="button1">
                            <button onClick={onOpenModal}>
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
            }
        </>


    );
}

export default AppHeader;