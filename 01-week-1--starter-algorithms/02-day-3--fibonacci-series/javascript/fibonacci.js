function fibonacci(num) {
  // type your code here
}

// Take a sequence of of numbers starting with 0 followed by 1. Add the next two number in line to get the next number in the sequence. 


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file



// And a written explanation of your solution
