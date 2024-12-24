function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  }
  // ... rest of the function
}

//Alternative solution using default values:
function foo(a = 0, b = 0) {
  // ... rest of the function, using a and b with default values if null
}