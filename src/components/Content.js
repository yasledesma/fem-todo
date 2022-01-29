import Filter from "./Filter";
import List from "./List";

function Content() {
  return (
    <div className="Content">
        <List />
        <Filter />
        <p className="Content__drag-n-drop">Drag and drop to reorder the list</p>
    </div>
  );
}

export default Content;
