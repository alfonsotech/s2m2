console.log("Hello from the for-loops file");
// The For and While Loops

// Introduction
// Today we embark on a journey through the foundational concepts of JavaScript loops - the for and while loops. As you write code to automate tasks or process data, understanding these loops is crucial. Picture a scenario where you need to generate a report by sifting through thousands of lines of data or creating a repetitive pattern in a game. These are but a few instances where loops empower you to write efficient and effective code. By the end of this lesson, you'll be adept at using both for and while loops to control the flow of your JavaScript code.

// Core Competencies

// Using the for loop
// Using the while loop
// Coding Problems
// Using the for loop

// Relevance: Imagine you're a developer working on a new educational platform geared toward children. You're tasked with creating an interactive countdown that helps kids learn numbers while having fun. The countdown needs to catch their attention by not just displaying numbers, but also by pairing each number with a whimsical word for added engagement.

// Problem: Print numbers 1 through 10, each followed by the word 'Mississippi'.

// Procedure:

// Initialize a for loop where the variable i starts from 1 and increments until it reaches 10.
// In each iteration, use console.log to print the current value of i concatenated with 'Mississippi'.
// Ensure the string includes a space between the number and the word 'Mississippi'.
// Use template literals for ease of readability and concatenation.
// TODO: Code:
// for (let index = 1; index <= 3; index++) {
//   console.log(index + " Mississippi");
//   //output '1 M'
//   // 1 + 1 = 2
//   //check the condition, is 2 <= 10 , yes
//   // output '2 M'
//   // 2 +1 = 3
//   // condition, is 3 < = 3, yes
//   // output '3 M'
//   //3 + 1 = 4
//   // conditino, is 4 < = 3, NO!!!!!
//   // we're out
// }
// here

// TODO: Check For Understanding: How would you modify the for loop to count down from 10 to 1, followed by 'Mississippi'?
// for (let index = 10; index >= 1; index--) {
// //   console.log(index + " Mississippi");
//    console.log(`${index} Mississippi`);
// }

// Using the for loop
// Relevance: Picture yourself as a software engineer analyzing sensor data from a fleet of vehicles. You need to quickly extract and process only the even readings to determine if the vehicles are performing within expected parameters.

// Problem: Iterate over each item in the array and print any number that is even.

// Procedure:

// Set up a for loop that starts with index 0 and continues as long as the index is less than the length of the array.
// Inside the loop, use an if statement to check if the current number is even by using the modulus operator.
// If the number is even, print it to the console.
// Iterate through the entire array to ensure no even number is missed.
// TODO: Code:
// let nums = [15, 24, 8, 32, 15, 27, 64, 7, 82, 22, 12, 15]; //length is 12
// for (let j = 0; j < nums.length; j++) {
//   if (nums[j] % 2 === 0) {
//     console.log(nums[j]);
//   }
// }

// TODO: Check For Understanding: What change would you make to the for loop if you needed to print odd numbers instead of even ones?

// for (let j = 0; j < nums.length; j++) {
//   if (nums[j] % 2 !== 0) {
//     console.log(nums[j]);
//   }
// }

// Using the for loop
// Relevance: As a developer at a software company, you're given the task of cleaning data for a machine learning model. This includes replacing specific values in an array with null to indicate the absence of data where a particular value may skew the model's accuracy.

// Problem: Replace all occurrences of the number 15 in the array with null.

// Procedure:

// Begin by setting up a for loop that indexes from 0 to the last element of the array.
// Within the loop, conditionally check if the current array element equals 15.
// If true, assign null to the current index position in the array.
// Continue iterating until the entire array has been checked and modified as necessary.
// Log the modified array to the console outside the loop.
// TODO: Code:

// TODO: Check For Understanding: If you needed to replace multiple values, say 15 and 20, with null, how would you adjust the for loop?

// Using the for loop
// Relevance: You're creating an application for a local bakery that needs an automatic way to compile recipe steps into a single, easy-to-read format for display on a digital board. Efficiency and clarity are key in the prep area!

// Problem: Join the steps in the array to form a string containing all the steps, and then log the string.

// Procedure:

// Declare an empty string variable to hold the concatenated steps.
// Create a for loop to iterate through the array of steps.
// In each iteration, concatenate the current step to the recipe string, along with a comma and a newline character.
// After the loop, print the recipe string to the console.
// TODO: Code:

// TODO: Check For Understanding: How would you modify the for loop if you wanted to print each step on a new line without commas?

// Using the for loop
// Relevance: Imagine being a developer tasked with creating a financial application that aggregates daily transactions. Your current task involves debugging a segment of code that sums an array of transaction values but isn't returning the expected total.

// Problem: Debugger: Fix the for loop to sum all the numbers in the array and print the correct value.

// Procedure:

// Initialize a variable 'sum' with the value 0 to begin the accumulation process.
// Set up a for loop with an index starting at 0, iterating through the length of the array.
// In every iteration, add the value at the current index to the 'sum' variable.
// After the loop completes, log the 'sum' variable to the console to display the total.
// TODO: Code:
// const numbers = [1, 2, 3, 4];
// let sum = 0;
// for (let k = 0; k < numbers.length; k++) {
//   //   sum = sum + numbers[k];
//   sum += numbers[k];
// }
// console.log("sum", sum);

// TODO: Check For Understanding: What alternative method could you use to sum the elements in the array if you wanted to avoid a for loop?

// Using the while loop
// Relevance: As a developer at a space agency, you're in charge of creating a visual countdown interface for launching a satellite. To build anticipation and ensure all systems are go, you must craft the countdown in a precise and dramatic manner.

// Problem: Print numbers counting backwards from 5 to 0 using a while loop.

// Procedure:

// Declare a variable 'countDown' with an initial value of 5.
// Implement a while loop that runs as long as 'countDown' is greater than or equal to 0.
// In the loop body, print the current value of 'countDown'.
// Decrement 'countDown' by 1 after each iteration to ensure the loop will eventually terminate.
// The loop should exit once 'countDown' is less than 0.
// TODO: Code:
// let countDown = 5;
// while (countDown >= 0) {
//   console.log(countDown);
//   countDown--;
// }

// TODO: Check For Understanding: How could you modify the while loop if you wanted to include the printing of 'Blast off!' after reaching 0?

// Using the incrementing while loop
// Relevance: Imagine you are an engineer in a tech company. You're working on an analytics dashboard that displays various data summaries. One of the features requires calculating the sum of the first 10 natural numbers as part of a larger statistical model.

// Problem: Find and print the sum of all numbers from 1-10 using a while loop.

// Procedure:

//TODO: Code:
// Initialize two variables, 'j' to 1 and 'sum' to 0.
let j = 1;
let sum = 0;

// Set up a while loop that continues to run as long as 'j' is less than or equal to 10.
while (j <= 10) {
  // Add the value of 'j' to 'sum' within the loop to accumulate the total.
  sum += j;
  console.log("sum as it goes", sum);
  // Increment 'j' by 1 during each iteration to progress through the number sequence.
  j += 2;
}
// After the loop, output the total sum to the console.
console.log("sum", sum);

// TODO: Check For Understanding: If the sum needed to include only odd numbers from 1-10, how would you adjust the while loop?

// Using the while loop
// Relevance: You are a programmer writing a script for a bookstore. The owner wants to automatically generate a list of book titles to display in the store's window. However, books with titles starting with 'The' are to be featured separately and thus must not appear in this list.

// Problem: Print all book titles in the array up until a book title begins with 'The'.

// Procedure:
// TODO: Code:
const books = [
  "To kill a Mockingbird",
  "Harry Potter",
  "Things fall apart",
  "The old man and the sea",
  "Macbeth",
];
// Define an index variable 'i' with an initial value of 0.
let i = 0;
// Begin a while loop with a condition to run as long as 'i' is less than the array's length and the current book title does not start with 'The'.
// The loop should exit when it encounters a book title beginning with 'The' or after checking all titles.
while (i < books.length && !books[i].startsWith("The")) {
  // Within the loop body, print the book title at the current index.
  console.log(i);
  console.log(books[i]);
  // Increment 'i' to move to the next book in the array.
  i++;
}

// TODO: Check For Understanding: What would be the while loop condition to continue printing titles even if they start with 'The'?

// Using the while loop
// Relevance: As a software intern, you are updating a legacy system and find an old piece of code meant to greet users. The code is not executing as intended, and it is your task to ensure that the warm welcome, 'hello world', is displayed the correct number of times.

// Problem: Debugger: correct the while loop to print 'hello world' 5 times.

// Procedure:

// Verify that the 'count' variable is properly initialized to 5.
// Employ a while loop that runs as long as 'count' is greater than 0.
// Print 'hello world' within the body of the loop.
// Decrement 'count' after each iteration to avoid an infinite loop.
// Ensure that the loop terminates after printing the message five times.
// TODO: Code:
// let count = 5;
// while (count) {
//   if (count === 5) {
//     console.log("hello world");
//     count--;
//   }
// }

// TODO: Check For Understanding: How could you refactor the loop to print a different greeting after the fifth 'hello world'?

// Sprint Challenge Preview
// Challenge: The sumNumsFor Function
// Objective: Create a function named sumNumsFor that takes an array of numbers, adds up the numbers, and returns the total. It should skip any non-numeric values and return a specific message if '13' is encountered.

// Functionality:

// The sumNums function accepts an array of values.
// Conditions:

// If the input array is empty, the function returns 0.
// The function ignores non-numeric values within the array.
// If the number 13 appears in the array, the function returns 'I'm too superstitious!'

// Hints:
// Consider using typeof to check if the array elements are numbers.
// Remember to initialize your sum accumulator before starting the loop.
// Think about where and how to check for the number 13 within your loop.

// TODO: Code:

// Declare a function named sumNumsFor that takes an array as its parameter.
const arr = [];
function sumNumsFor(arr) {
  // If the input array is empty, the function returns 0.
  if (arr.length === 0) {
    return 0;
  }
  // Inside the function, declare a variable to keep track of the sum, initialized to 0.
  let sum = 0;
  // Implement a for loop to iterate over each element in the array.
  for (let i = 0; i < arr.length; i++) {
    // Check if an element is the number 13, and if so, return the superstitious message.
    if (arr[i] === 13) {
      console.log("sum before returning", sum);
      return "I'm too superstitious!";
    }
    // If an element is a number, add it to the sum.
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }
  // Return the computed sum after the for loop is finished.
  return sum;
}
console.log(sumNumsFor(arr));

// Conclusion
// In today's dive into for and while loops, we explored their syntax, scenarios for their use, and how to effectively employ them to solve problems programmatically. These constructs are powerful tools in a programmer’s arsenal, enabling the efficient processing of repetitive tasks. Remember, the choice between a for loop and a while loop often comes down to the specific requirements of the problem at hand. As you build your coding projects, you'll find many opportunities to apply these loop constructs creatively to achieve clean and robust code.
