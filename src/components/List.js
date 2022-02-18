import React, { useContext, useState, useEffect } from "react";
import Task from "./Task";
import { TodoContext } from "./TodoContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const List = () => {
  const { dispatch, renderize, setRenderize } = useContext(TodoContext);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleClear = () => {
    dispatch({ type: "clear-completed" });
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination || result.source.index === result.destination.index)
      return;
    setRenderize(
      reorder(renderize, result.source.index, result.destination.index)
    );
  };

  return (
    <div className="List">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="task-list">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {renderize.map((task, i) => {
                return (
                  <Draggable key={task.id} draggableId={task.id} index={i}>
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Task task={task} dispatch={dispatch} />
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div className="List__wrapper">
        <button type="button" className="List__btn">
          {renderize.length} items left
        </button>
        <button type="button" className="List__btn" onClick={handleClear}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default List;
