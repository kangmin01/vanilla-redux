import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if (action.type === "PLUS") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "MINUS" });
console.log(countStore.getState());

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handlePlus = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
