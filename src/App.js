import "./App.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ToDoList from "./ToDoList";
import "antd/dist/reset.css";

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
