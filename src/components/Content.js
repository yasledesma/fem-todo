import Filter from "./Filter";
import List from "./List";

const Content = ({todos, dispatch}) => {
  return (
    <div className="Content">
        <List todos={todos} dispatch={dispatch}/>
        <Filter todos={todos} />
        <p className="Content__drag-n-drop">Drag and drop to reorder the list</p>
    </div>
  );
};

export default Content;
