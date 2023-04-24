import "./App.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ToDoList from "./ToDoList";
import "antd/dist/reset.css";
import DragDrop from "./DragDrop";

function App() {
  return (
    <div className="App">
      <DragDrop />
    </div>
  );
}

export default App;
