import logo from "./logo.svg";
import "./App.css";
import AppContent from "./components/Content/AppContent";
import AppHeader from "./components/Header/AppHeader";
import TodoPage from "./components/TodoPage/TodoPage";
import React from "react";
import Home from "./pages/Home";
import TodoListPage from "./components/TodoListPage/ViewPage";
function App() {
  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
}

export default App;
