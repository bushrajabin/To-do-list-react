import logo from "./logo.svg";
import "./App.css";
import AppContent from "./components/Content/AppContent";
import AppHeader from "./components/Header/AppHeader";
import TodoPage from "./components/TodoPage/TodoPage";
import React from "react";
function App() {
  return (
    <React.Fragment>
         <AppHeader />
      <AppContent />
      <TodoPage/>
    </React.Fragment>
  );
}

export default App;
