import React from "react";
import "./ViewPage.css"

function ViewPage({ setIsTodoOpen, currentTodo }) {
    console.log('currentTodo', currentTodo)

    const { id, title, status_ } = currentTodo;

    function ClickForClose() {
        setIsTodoOpen(false)

    }
    return (
        <>
            <div className="mainParent">
                <div className="mainDiv">
                    <h1>**Your Todo's**</h1>
                    <h2>Title: {title}</h2>
                    <h2>Status: {status_}</h2>
                    <h2>ID: {id}</h2>
                    <button onClick={() => ClickForClose()}>X</button>
                </div>
            </div>
        </>
    )
}


export default ViewPage