import React from "react";
import "./ViewPage.css"

const ViewPage=({ setIsTodoOpen, currentTodo })=> {
    console.log('currentTodo', currentTodo)

    const { id, title, status_ } = currentTodo;

    const ClickForClose=() =>{
        setIsTodoOpen(false)

    }
    return (
        <>
            <div className="mainParent">
                <div className="mainDiv">
                    <h1>**Your Todo**</h1>
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