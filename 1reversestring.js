// Define the input string
const input="Hello, world!";

// Function to reverse a string
function reversestring(inputstring){
   const charArray=inputstring.split('');
   charArray.reverse();
   return charArray.join('');
}

// Function to reverse and print the string after a delay
function reverseafterdelay(inputstring,delay){
    setTimeout(() => {
        const reversed=reversestring(inputstring);
        console.log("reversed string:",reversed);
    }, delay*1000); //convert seconds to miliseconds
}

//call the function with a two second delay
const delayInSeconds=2;
reverseafterdelay(input,delayInSeconds);