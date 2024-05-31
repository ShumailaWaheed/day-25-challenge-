// Question: 73
function updateVariable() {
    // Declare a variable using let and assign an initial value
    var value = 10;
    console.log("Initial value: ".concat(value));
    // Update the variable's value
    value = 20;
    console.log("Updated value: ".concat(value));
}
updateVariable();
// Question: 74
function swapVariables() {
    // Initial values
    var a = 5;
    var b = 10;
    console.log("Before swap: a = ".concat(a, ", b = ").concat(b));
    // Temporary variable to hold the value of a
    var temp = a;
    // Swap the values
    a = b;
    b = temp;
    console.log("After swap: a = ".concat(a, ", b = ").concat(b));
}
swapVariables();
// Question: 75
function compoundAssignments() {
    // Initial value
    var x = 4;
    console.log("Initial value: x = ".concat(x));
    // Addition
    x += 2; // Equivalent to x = x + 2
    console.log("After addition (x += 2): x = ".concat(x));
    // Subtraction
    x -= 1; // Equivalent to x = x - 1
    console.log("After subtraction (x -= 1): x = ".concat(x));
    // Multiplication
    x *= 3; // Equivalent to x = x * 3
    console.log("After multiplication (x *= 3): x = ".concat(x));
    // Division
    x /= 5; // Equivalent to x = x / 5
    console.log("After division (x /= 5): x = ".concat(x));
}
compoundAssignments();
