const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueElement = document.getElementById("value");

let counterValue = 0;

const updateCounterUI = () => {
  counterValueElement.textContent = counterValue;
  //console.log("Counter Value:", counterValue);
};

decrementButton.addEventListener("click", () => {
  counterValue--;
  updateCounterUI();
});

incrementButton.addEventListener("click", () => {
  counterValue++;
  updateCounterUI();
});
