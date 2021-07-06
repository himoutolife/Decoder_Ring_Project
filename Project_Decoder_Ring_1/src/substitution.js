// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
let abc=  'abcdefghijklmnopqrstuvwxyz'

  function substitution(input, alphabet, encode = true) {// your solution code here
 if(!alphabet || !input){// eliminate errors
   return false;
 }
 if(alphabet.length != 26){//eliminate if it's not 26 characters in length
   return false;
 }
 if(Array.from(new Set(alphabet)).length!=26){//for special characters
   return false;
 }
input=input.toLowerCase();//forcing input value to be lowercase
alphabet= alphabet.split('');//spliting up the alphabet value (declared above)
let map={}//empty object to hold values
let decode={}//empty object to hold decoded message
let result = ""//empty string for encoded message to return



abc.split('').forEach((letter, index)=>{//take abc variable and split up the string, we're encoding
  map[letter]=alphabet[index]//map the letter input and match it to the alphabet variable (index is the position)
  decode[alphabet[index]]= letter//use the empty object decode to put the indexed alphabet in and set it equal to the letter
});


if(!encode) map = decode;//if encode is false, which means we're decoding
input.split('').forEach(input=>{//take the input and split it up and loop over it
  result += input === " " ? " ": map[input]//empty result becomes the decoded input
})
return result;//return the decoded message


  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
