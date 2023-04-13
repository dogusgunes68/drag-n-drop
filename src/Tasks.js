import React from "react";
import { Divider } from "antd";
import { Draggable } from "react-beautiful-dnd";

export default function Tasks({ task, index }) {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          style={{
            ...provided.draggableProps.style,
            opacity: snapshot.isDragging ? "0.5" : "1.0",
          }}
        >
          <h4>Title</h4>
          <Divider />
          <p>Content</p>
        </div>
      )}
    </Draggable>
  );
}
