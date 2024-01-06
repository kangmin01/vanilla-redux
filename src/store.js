import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

// const addToDo = (text, id) => ({ type: ADD, text, id });
// const deleteToDo = (id) => ({ type: DELETE, id });

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: action.id }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id != action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
