import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./AppContent.css"
import TodoListPage from "../TodoListPage/ViewPage";
function AppContent({ setIsOpen }) {

    const [todos, setTodos] = useState([]);
    const [isTodoOpen, setIsTodoOpen] = useState(false)
    const [currentTodo, setCurrentTodo] = useState({})

    // retrieving todoes from localStorage---
    function getTodos() {
        const todoData = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoData);
    }

    useEffect(() => {
        getTodos()
    }, [todos])

    function onRemove(id) {
        // alert(`you clicked on this specific id :${id}`,)
        const newTodos = todos.filter((data) => data.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos))
    }

    function clickForShowTodo() {
        setIsOpen(true)
    }


    function showTodoList(data) {
        setIsTodoOpen(true)
        console.log('data', data)

        if (data) {
            setCurrentTodo(data)
        }
    }


    return (
        <>
            <div className="content">
                {
                    todos?.length > 0 ? <h2> totals Todos are- {todos.length}</h2> : <h2>No Todos </h2>
                }
            </div>

            {
                isTodoOpen && <TodoListPage setIsTodoOpen={setIsTodoOpen} currentTodo={currentTodo} />
            }




            {
                todos?.length > 0 && <div className="mainCardContainer">
                    {
                        todos?.map((data, i, arr) => {
                            const { id, status_, title } = data;

                            return (
                                <>
                                    <div className="todoCard">
                                        <div className="todoCardname">
                                            <h3>Title :{title}</h3>
                                            <h3>Status :{status_}</h3>
                                            <h3>Id :{id}</h3>

                                        </div>
                                        <div className="todoCardButton">
                                            <button onClick={() => showTodoList(data)}>View</button>
                                            <button onClick={clickForShowTodo}><i class="fa-solid fa-pen"></i></button>
                                            <button onClick={() => onRemove(id)}><i className="fas fa-trash 2x"></i></button>
                                        </div>


                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            }

        </>


    );
}

export default AppContent;