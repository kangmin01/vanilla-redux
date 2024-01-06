import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text, id) => ({ type: ADD, text, id });
export const deleteToDo = (id) => ({ type: DELETE, id });

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id != action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
