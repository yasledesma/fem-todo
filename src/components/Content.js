import Filter from "./Filter";
import List from "./List";

function Content({ todos, setTodos }) {
  return (
    <div className="Content">
        <List todos={todos} setTodos={setTodos} />
        <Filter todos={todos} setTodos={setTodos} />
        <p className="Content__drag-n-drop">Drag and drop to reorder the list</p>
    </div>
  );
}

export default Content;
