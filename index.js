let Number1 = parseInt(
  window.prompt(
    `I want to do some calculation so i need two numbers. please enter first number:`
  )
);
let Number2 = parseInt(window.prompt(`Please Enter second number`));
let operation = window.prompt(
  `please enter which operation do you want to do between your numbers. choose one of these signs: + - * /?`
);
let result;
if (operation == "+") {
  result = Number1 + Number2;
} else if (operation == "-") {
  result = Number1 - Number2;
} else if (operation == "*") {
  result = Number1 * Number2;
} else if (operation == "/") {
  result = Number1 / Number2;
} else {
  window.alert("You should enter valid operation sign.");
}
if (result != null)
  window.alert(
    `The result is-> ${Number1} ${operation} ${Number2} = ${result}`
  );
