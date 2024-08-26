/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Do NOT change the name of any of the
functions in this assignment, it will disable the automated unit testing.

0.

Complete the function below:

Return true from this function to see how the testing works

Read the terminal output before and after to see the difference

******************************************************************************/

export function start() {
  return true;
};

/******************************************************************************
1.

Complete the function below:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

HINT: Use the modulo operator (%) Google it! 😊
******************************************************************************/
export const oddOrEven = (number) => {
  if(number % 2 === 0) //If there is no remainder after %2, number is even
  {
    return "Even";
  }
  else { return "Odd"; } 
  
}

/******************************************************************************
2.

Complete the function below:

The function should take in a string as a parameter and return the string 
in upper case with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/
export function makeMeLoud(inputString) {
  let upperCaseString; //Create new string
  upperCaseString = inputString.toUpperCase(); //toUpperCase() changes all lowercase to uppercase

  upperCaseString = upperCaseString +"!"; //Append "!"
  return upperCaseString;
}

/******************************************************************************
3.

Complete the function below:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour received is less than 0
"Good night (name received)" if the hour received is 0-5
"Good morning (name received)" if the hour received is 6-11
"Good day (name received)" if the hour received is 12-17
"Good evening (name received)" if the hour received is 18-23
"Invalid time" if the hour received is greater than 23


******************************************************************************/

export const greeter = (name, time) => {
  if(time < 0) return "Invalid time"; //Less than 0
  if(time >= 0 && time <= 5) return "Good night "+name; //More or equal to 0, less or equal to 5
  if(time >= 6 && time <= 11) return "Good morning "+name; //More or equal to 6, less or equal to 11
  if(time >= 12 && time <= 17) return "Good day "+name; //More or equal to 12, less or equal to 17
  if(time >= 18 && time <= 23) return "Good evening "+name; //More or equal to 18, less or equal to 23
  if(time > 23) return "Invalid time"; //More than 23
}

/******************************************************************************
4.

Complete the function below:

The function should take in an array as a parameter, and return the array 
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"]
******************************************************************************/

export function arrayTrimmer(array) {
  array = array.slice(1,-1); //Slice first item from the start, and first item from the back.

  return array;
}

/******************************************************************************
5.

Complete the function below:

The function should take in a string as a parameter.

Use string methods on the text parameter you receive to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 
Then return the string.

Example1: "  Javascript is hard   " should return "Javascript is fun"
Example2: " It's hard to use methods " should return "It's hard to use methods"
Example3: "   hard        " should return "fun"

******************************************************************************/

export const cleanAndFun = (string) => {
  return string.replace("hard", "fun").trim(); //string.replace(,) to replace target
}                                              //trim() removes whitespace from start and end

/******************************************************************************
6.

Complete the function below:

The function should take in an array as a parameter.

The automatic testing will test your function with the following array:
["Spider-Man", "Thor", "Hulk", "Doctor Strange", "Iron Man", "Black Widow"]

Use array methods to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

 Return the resulting array.
******************************************************************************/

export function marvelEditor(array) {
  array.slice(1); //Slice/remove the first element
  let index = array.indexOf("Doctor Strange"); //Get the index of the target
  if (index !== -1 && index < array.length)  //Check that our index is valid
  {
    array[index] = "Skrull"; //Redefine target element to new element
  }
  array.splice(0,3); //Splice/remove the first 3 elements, starting from the first
  array.unshift("Captain America"); //Use unshift to push a new item to the front of the array
  let newString; //Make new String
  newString = array.toString(); //Set the new string to the value of the array
  
  newString = newString.replaceAll(",","💪"); //Array.tostring separates elements with ",". Replace with muscles.
  
  return newString;

}

/******************************************************************************
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Complete the function below:

The function should take in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the 
beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received
is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

******************************************************************************/

export function coolMaker(varToIdentify) {
  var stringToReturn; //Set up a blank string
  if(typeof varToIdentify === "string") //Check typeOf our variable, is it a string?
  {
    stringToReturn = "😎" + varToIdentify + "😎" //Append smileys
  }
  else if(typeof varToIdentify === "number") //Check for number
  {
    varToIdentify += varToIdentify; //We plus the variable with itself (or * 2)
    stringToReturn = varToIdentify.toString(); //Convert number to string
    stringToReturn = "😎" + stringToReturn + "😎"; //Append smileys
  }
  else if(typeof varToIdentify === "boolean") //Check for boolean
  {
    if(varToIdentify) stringToReturn = "😎Yeah😎"; //If the boolean is true
    else stringToReturn = "😎Chill😎" //else it will be false
  }
  else return "😎Primitive values only😎" //The variable is not a string, number or boolean
  return stringToReturn;
}

/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Complete the function below:

The function should take in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received.
If it does, remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the 
array and return it.

Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
******************************************************************************/

export const addOrRemove = (array, string) => {
  if(array.includes(string))
  {
    let index = array.indexOf(string);
    if (index !== -1 && index < array.length) 
    {
      array.splice(index,1);
    }
  }
  else array.push(string);
  return array;
  
};
