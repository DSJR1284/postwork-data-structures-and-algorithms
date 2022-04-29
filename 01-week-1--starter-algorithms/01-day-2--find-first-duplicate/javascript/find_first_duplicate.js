function findFirstDuplicate(arr) {
  // type your code here
  let elementSet = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (elementSet.has(arr[i])) return arr[i];
    elementSet.add(arr[i]);
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
   console.log("=>", findFirstDuplicate([1, 5, 3, 10, 2, 5]));

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
/*
1)Iterate through the array
2)Check the value of the first index and compare it to the rest of the array for a match. 
3)If there is a match optput the match. 
4)If no match move on to the next index and comapre it to the rest of the array. 
5)Keep going until all values in the array have been checked. 
If not match is found return -1. 
*/

// And a written explanation of your solution
