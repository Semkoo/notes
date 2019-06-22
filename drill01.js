 /**
 * Palindrom Problem Interview Questions 
 */
 
 isPalindrome = (str) =>{
  // TODO:: VALIDATION 
  
  // Reverse the string and check if matches, but the string has to be in array
  // EXAMPLE: "meow" => ['m','e','o','w'] => reverse => and join the array 
  const reverseArray= str.split('').reverse().join('');
  if(str === reverseArray){
    return true;
  }else{
    return false;
  }
}

let word = "meow";

console.log(isPalindrome(word))
