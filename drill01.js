 /**
 * Palindrom Problem Interview Questions 
 */
 
 isPalindrome = (str) =>{
  // TODO:: VALIDATION 
  // Base Case
  // Only care about strings so if its null or Integer or underfind
  
  
  // Reverse the string and check if matches, but the string has to be in array
  // EXAMPLE: "meow" => ['m','e','o','w'] => reverse => and join the array 
  const reverseArray= str.split('').reverse().join('');
  //   if(str === reverseArray){
  //     return true;
  //   }else{
  //     return false;
  //   }
  //   return str === reverseArray ? true: false;
  return str === reverseArray;
}

let word = "meow";
let word = ['bob', 'xguvv']


for(let str of words){
 if(isPalindrome(str)){
   console.log(`${str} is palindrome`);
 }else{
   console.log(`${str} is not palindrome `);
 }
}

