import React, { useState } from "react";
import Nav from "../components/Nav";
import AppHeader from "../components/Header/AppHeader";
import AppContent from "../components/Content/AppContent";
import TodoPage from "../components/TodoPage/TodoPage";
import App from "../App";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const[isDelete,setIsDelete]=useState(false)



    return (
        <>

            <AppHeader setIsOpen={setIsOpen} />
            <AppContent setIsDelete={setIsDelete} />

            {
                isOpen && <TodoPage setIsOpen={setIsOpen} />

            }

        </>
    );
};

export default Home;
