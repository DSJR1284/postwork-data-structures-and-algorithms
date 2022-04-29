function reverseString(str) {
  // type your code here
  let reversed = "";      
  for (var i = str.length - 1; i >= 0; i--){         
    reversed += str[i];  
  }     
return reversed;  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
/*
1)Take in a string 
2)Check the length of the string. 
3)Reverse the string 
4)Print it out 
*/ 

// And a written explanation of your solution
/* 
Set reverse to a empty string 
Create a for loop with i set to str.length -1 
if i is greater than or equal to 0 set i to decriment 
return the reversed string. 
*/
