import Filter from "./Filter";
import List from "./List";

const Content = ({todos, dispatch, filter, setFilter, state, setState}) => {
  return (
    <div className="Content">
        <List todos={todos} dispatch={dispatch} filter={filter} setFilter={setFilter} state={state} />
        <Filter todos={todos} setFilter={setFilter} setState={setState} />
        <div className="Content__drag-n-drop">Drag and drop to reorder the list</div>
    </div>
  );
};

export default Content;
