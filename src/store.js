import { createStore } from "redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload.text, id: action.payload.id }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id != action.payload);
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      state.push({ text: action.payload.text, id: action.payload.id });
    })
    .addCase(deleteToDo, (state, action) =>
      state.filter((toDo) => toDo.id != action.payload)
    );
});

// const store = createStore(reducer);
const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
