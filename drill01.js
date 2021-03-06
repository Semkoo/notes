 /**
 * Palindrom Problem Interview Questions 
 */
 
 isPalindrome = (str) =>{
  // TODO:: VALIDATION 
  // Base Case
  // Only care about strings so if its null or Integer or underfind
  if(input === null || input === undefined || String(str).length === 0 ){
     throw new Error("Undefiend values")
  }
  
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
 
isPalindromeOptimized = (str) =>{
  for(let left=0, right = str.length -1; left < right; [left, right] = [left + 1, right -1]){
    if(input[left] !== input[right]){
      return false;
    }
  }
  return true;
}

let word = "meow";
let word = ['bob', 'xguvv']


for(let str of words){
 try{
 if(isPalindrome(str)){
   console.log(`${str} is palindrome`);
 }else{
   console.log(`${str} is not palindrome `);
 }
 }
 catch {
   console.log("Error occured");
 }
}

