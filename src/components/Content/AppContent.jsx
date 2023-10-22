import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./AppContent.css"
function AppContent({ setIsDelete }) {



    const [todos, setTodos] = useState([]);
    // const [todoData, setTodoData] = useState(false)


    // retrieving todoes from localStorage---
    function getTodos() {
        const todoData = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoData);

    }

    useEffect(() => {
        getTodos()
    }, [todos])



    function TrashItem() {
        alert("deletr ")
        setIsDelete(false)
        // todoData()
    }
    return (
        <>
            <div className="content">
                {
                    todos?.length > 0 ? <h2> totals Todos are- {todos.length}</h2> : <h2>no todos </h2>
                }
            </div>

            <div className="mainCardContainer">
                {
                    todos?.map((data, i, arr) => {
                        return (
                            <>
                                <div className="todoCard">
                                    <div className="todoCardname">
                                        <h3>Title :{data.title}</h3>
                                        <h3>Status :{data.status_}</h3>
                                    </div>

                                    <div className="todoCardButton">
                                        <button>View</button>
                                        <button><i class="fa-solid fa-pen"></i></button>
                                        <button onClick={TrashItem}><i className="fas fa-trash 2x"></i></button>
                                    </div>


                                </div>
                            </>
                        )
                    })
                }


            </div>



        </>


    );
}

export default AppContent;