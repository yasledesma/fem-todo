import Filter from "./Filter";
import List from "./List";

const Content = () => {
  return (
    <div className="Content">
      <List />
      <Filter />
      <div className="Content__drag-n-drop">
        Drag and drop to reorder the list
      </div>
    </div>
  );
};

export default Content;
