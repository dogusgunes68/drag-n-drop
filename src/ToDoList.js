import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Tasks from "./Tasks";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  const tasks = [
    {
      id: "1",
      title: "dasd asd ",
      content: "ada sd asds dsadsad",
    },
    {
      id: "2",
      title: "dasd asdsdasd ",
      content: "ada sd asds dsadsad",
    },
  ];
  return (
    <DragDropContext>
      <div className="lists">
        <h3 style={{ paddingTop: "20px" }}>Todo List</h3>
        {
          <Droppable key={uuidv4()} droppableId={uuidv4()}>
            {(provided) =>
              tasks.map((task) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="task"
                  key={uuidv4()}
                >
                  <Tasks task={task} />
                  {provided.placeholder}
                </div>
              ))
            }
          </Droppable>
        }
      </div>
    </DragDropContext>
  );
}
