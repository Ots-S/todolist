import React from "react";
import Home from "./components/Home";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";

function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    </div>
  );
}

export default App;
