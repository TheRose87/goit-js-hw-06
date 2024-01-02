const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const enteredValue = validationInput.value.trim();
  const expectedLength = parseInt(
    validationInput.getAttribute("data-length"),
    10
  );

  if (enteredValue.length === expectedLength) {
    validationInput.style.borderColor = "green";
    //console.log("Correct length! Entered Value:", enteredValue);
  } else {
    validationInput.style.borderColor = "red";
    //console.log("Incorrect length! Entered Value:", enteredValue);
  }
});
