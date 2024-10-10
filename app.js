// const firstname = "Jamal";
// console.log("My firstname is: ", firstname);
// const lastname = "Adeleye";
// console.log("My lastname is: ", lastname);

// function logDetails(fname, lname, a, m) {
//   console.log(
//     `These are the candidates details: ${fname} ${lname}, ${a}, ${m}`
//   );
// }

// const anotherLogDetails = () => {
//   console.log(
//     `These are the candidates details: ${firstname} ${lastname}, ${age}, ${isMarried}`
//   );
// };

// function usePassedInArrowFunction(passedInFunction) {
//     passedInFunction();
// }
// const age = 50;
// console.log("My age is: ", age);
// const isMarried = false;
// console.log("My maritals status is: ", isMarried);
// logDetails(firstname, lastname, age, isMarried);   
// usePassedInArrowFunction(anotherLogDetails);

let firsnum, secondnum;
firsnum = 20;
secondnum = 10;

function sum(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  // check for zero division
  if (num2 === 0) {
    console.log("Cannot divide by zero");
    return 0;
  }
  return num1 / num2;
}

function notify(result) {
    console.log("The result of the operation of the two numbers is", result);
}

function operationsManager(num1, num2, operation, notify) {
  const result = operation(num1, num2);
  notify(result);
}

// operationsManager(firsnum, secondnum, sum, notify);
// operationsManager(firsnum, secondnum, subtract, notify);
// operationsManager(firsnum, secondnum, multiply, notify);
// operationsManager(firsnum, secondnum, divide, notify);

const operations = [sum, subtract, multiply, divide];

for (const operation of operations) {
    operationsManager(firsnum, secondnum, operation, notify);
}

// let i = 0;
// do {
//     const operation = operations[i];
//     operationsManager(firsnum, secondnum, operation, notify);
//     i++;
// }
// while (i < operations.length);
