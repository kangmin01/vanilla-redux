import { connect } from "react-redux";
import { actionCreators } from "../store";

function ToDo({ text, deleteToDo }) {
  return (
    <li>
      {text} <button onClick={deleteToDo}>🗑️</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
