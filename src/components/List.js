import React, { useContext, useState, useEffect } from "react";
import Task from "./Task";
import { TodoContext } from "./TodoContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const List = () => {
  const { todos, dispatch, state, setState, filter } = useContext(TodoContext);
  const [renderize, setRenderize] = useState([]);
  const [dragPosition, setDragPosition] = useState(renderize);

  useEffect(() => {
    if (state === true) {
      setRenderize(filter);
    }

    if (state === false) {
      setRenderize(todos);
    }
  }, [state, todos, filter]);

  const handleClear = () => {
    dispatch({ type: "clear-completed" });
    setState(false);
  };

  const handleOnDragEnd = (result) => {
    console.log(result)
    if (!result.destination || result.source.index === result.destination.index)
      return;
    const items = Array.from(dragPosition);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, [reorderedItem]);

    setDragPosition(items);
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
