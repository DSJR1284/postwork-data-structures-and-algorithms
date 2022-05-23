function fibonacci(num) {
  // type your code here
  let a = 0, b = 1, val;

  while (num >= 0){
    val = a;
    a = a + b;
    b = val;
    num--;
  }

  return b;
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
/* 
1)Loop through the sequence and add the first two numbers together.
2) Take the sum of of the loop and add the next two numbers to get the next number in the sequence. 
*/




// And a written explanation of your solution
