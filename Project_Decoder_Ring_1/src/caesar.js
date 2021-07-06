// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
const alphabet =[
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
]

  function caesar(input, shift, encode = true) {// your solution code here
    if(shift ===0 || shift <-25 || shift >25 || shift === null || shift === undefined){//immediately eliminating the shifts that are wrong
      return false;
    }
    if(encode === false){//this determines if we're encoding or decoding
      shift = shift * -1;//if false, then shift is reversed
    }

      return input.toLowerCase().split('').map((letter)=>{ //need to take the input and make it all lower case, then split it up to map the input values

    if(alphabet.includes(letter)){//need to check if letter equals a value in alphabet array
      if(alphabet.indexOf(letter) + shift <0){//use indexOf to give the letter a value in the matching alphabet array. Shift is the shift input if it is less than 0 (negative number), helping with wrap around for alphabet
        return alphabet[alphabet.indexOf(letter)+ shift +26];//this is returning the now valued letter with a negative shift value, to add 26 to that letter and return the new letter value
      }

    if(alphabet.indexOf(letter) + shift > 25){//now valued letter with shift greater than 25. this helping with the wrap around for alphabet
      return alphabet[alphabet.indexOf(letter)+ shift - 26];//positive shift value, taking away 26 to get new letter value
      }
        return alphabet[alphabet.indexOf(letter) +shift]; //this is a default return if shift is within -25 and 25 parameters
  }else{
      return letter;//if it doesn't match in the alphabet, just leave it alone and return it. This is for non aphabetic values such as numbers and symbols
      }
    }).join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
