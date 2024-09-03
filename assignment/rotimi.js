const calculate = (num1, num2, operatn) => {
  // Validate not null or undefined

  if (num1 == null || num2 == null) {
      return 'Error: Invalid number.';
  }
  
  // To show that the allowed operation are used.

  const allowedOperatns = ['add', 'subtract', 'multiply', 'divide'];
  if (!allowedOperatns.includes(operatn)) {
      return 'Error: Invalid operation.Choose any of "add, subtract, multiply, divide."';
  }

  // Perform the operation

  let result;
  if (operatn === 'add') {
      result = num1 + num2;
  } else if (operatn === 'subtract') {
      result = num1 - num2;
  } else if (operatn === 'multiply') {
      result = num1 * num2;
  } else if (operatn === 'divide') {
      if (num2 === 0) {
          return 'Error: Division by zero is not allowed.';
      }
      result = num1 / num2;
  }

  return result;
}

console.log(calculate(5, 3, 'add'));
console.log(calculate(10, 2, 'divide'));
console.log(calculate(20, 9, 'subtract')); 
console.log(calculate(9, 4, 'multiply')); 
console.log(calculate(6, 0, 'divide'));
console.log(calculate(5, 2, 'divide'));