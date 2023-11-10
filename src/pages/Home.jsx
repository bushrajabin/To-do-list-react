import React, { useState } from "react";
import Nav from "../components/Nav";
import AppHeader from "../components/Header/AppHeader";
import AppContent from "../components/Content/AppContent";
import TodoPage from "../components/TodoPage/TodoPage";
import App from "../App";
import TodoListPage from "../components/TodoListPage/ViewPage";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>

            <AppHeader setIsOpen={setIsOpen} />
            <AppContent setIsOpen={setIsOpen} isOpen={isOpen} />
            {
                isOpen && <TodoPage setIsOpen={setIsOpen} />

            }


        </>
    );
};

export default Home;
