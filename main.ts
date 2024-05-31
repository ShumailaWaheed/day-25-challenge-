// Question: 73

function updateVariable() {
    // Declare a variable using let and assign an initial value
    let value = 10;
    console.log(`Initial value: ${value}`); 
  
    // Update the variable's value
    value = 20;
    console.log(`Updated value: ${value}`); 
  }
  
  updateVariable();

// Question: 74

function swapVariables() {
    // Initial values
    let a = 5;
    let b = 10;
  
    console.log(`Before swap: a = ${a}, b = ${b}`); 
  
    // Temporary variable to hold the value of a
    let temp = a;
  
    // Swap the values
    a = b;
    b = temp;
  
    console.log(`After swap: a = ${a}, b = ${b}`); 
  }
  
  swapVariables();

  // Question: 75

  function compoundAssignments() {
    // Initial value
    let x = 4;
    console.log(`Initial value: x = ${x}`); 
  
    // Addition
    x += 2; // Equivalent to x = x + 2
    console.log(`After addition (x += 2): x = ${x}`); 
  
    // Subtraction
    x -= 1; // Equivalent to x = x - 1
    console.log(`After subtraction (x -= 1): x = ${x}`); 
  
    // Multiplication
    x *= 3; // Equivalent to x = x * 3
    console.log(`After multiplication (x *= 3): x = ${x}`); 
  
    // Division
    x /= 5; // Equivalent to x = x / 5
    console.log(`After division (x /= 5): x = ${x}`); 
  }
  
  compoundAssignments();
  