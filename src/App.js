import React, { useState, useEffect } from "react";
import "./App.css";
import initialData from "./assets/initial-data";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(initialData);
  }, []);

  return (
    <DragDropContext>
      {initialData.columnOrder.map((columnId) => {
        const column = initialData.columns[columnId];
        const tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}

export default App;
