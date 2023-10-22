import logo from "./logo.svg";
import "./App.css";
import AppContent from "./components/Content/AppContent";
import AppHeader from "./components/Header/AppHeader";
import TodoPage from "./components/TodoPage/TodoPage";
import React from "react";
import Home from "./pages/Home";
function App() {
  return (
    <React.Fragment>
      <Home />
         {/* <AppHeader />
      <AppContent />
      <TodoPage/> */}
    </React.Fragment>
  );
}

export default App;
