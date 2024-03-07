console.log("hello from the basic-looping script file");

//Stump the Instructor questions

// Basic Looping
// Introduction
// In this lesson, we'll explore the power and versatility of looping in JavaScript. From iterating through vibrant arrays like rainbowColors to accessing specific properties within objects like a fakeProfile, we will learn how to loop effectively. Through real-world scenarios like listing kitchen necessities and greeting users by name, you'll discover how loops can simplify complex tasks. Get ready to understand not just the 'how' but the 'why' of looping constructs in JavaScript.

// Core Competencies
// Looping over array indices
// Looping over object properties

// Coding Problems
// Looping over array indices
// Relevance: While working on a game, you might have an array of power-ups. To activate each power-up, you'll need to loop through the array. As you do, you imagine players gaining strength and agility with each iteration. It is cases like these, from gaming to inventory systems, considering indices is crucial to functionality.

// Problem: Print out the indices of the array 'rainbowColors' using a 'for..in' loop.

// Procedure:

// Declare the variable 'rainbowColors' and assign an array of colors to it.
// Write a 'for..in' loop to iterate over the 'rainbowColors' array.
// Inside the loop, print the current index to the console.
// Test the loop to ensure it prints all indices.
// Review the output to ensure correctness.
//TODO: Code:
// const rainbowColors = ["red", "blue", "pink", "green", "purple"];
// //  0      1       2        3         4
// rainbowColors[1]; //output 'blue'
// for (let index in rainbowColors) {
//   console.log(index);
// }

//TODO: Check For Understanding: You want to list groceries from a shopping list array. How would you print each index?

// 1. declare a const variable called shoppingList and store an array in it listing the shopping items
// 2. write the syntax for the for..in loop that iterates over shopping list
// 3. Write a log to the console inside the for loop that prints teh index
// RUn it!

// const shoppingList = ["cheese", "milk", "bananas"];
// for (let item in shoppingList) {
//   console.log(item);
// }

// Looping over array indices
// Relevance: Think of a situation where you're working with a team on a color-coded task manager. You need to display the colors along with their assigned meanings. By looping through colors, you effectively communicate the significance of each hue, ensuring clarity in team assignments and statuses.

// Problem: Print out each color name from the 'rainbowColors' array using a 'for..in' loop.

// Procedure:

// Use the previously declared 'rainbowColors' array.
// Write a 'for..in' loop that iterates over the array.
// Within the loop, use the index to log each color name to the console.
// Test the loop with different arrays.
// Ensure the color names are printed accurately.
//TODO: Code:
// const rainbowColors = ["red", "blue", "pink", "green", "purple"]; //5
// for (let index in rainbowColors) {
//   //rainbowColor[]; //output 'blue'
//   console.log(rainbowColors[index]);
// }

// for (let index = 0; index < rainbowColors.length; index++) {
//   console.log(rainbowColors[index]);
// }

//TODO: Check For Understanding: Given an array of team member names, how would you use a loop to greet each member?
// const teams = ["mavericks", "knicks", "giants", "broncos"];
// for (let item in teams) {
//   //   console.log("string concat", "Hello members of the " + teams[item] + "team!"); // string concat
//   console.log("string literal", `Hello members of the ${teams[item]} team!`); //string literal
// }

// Looping over array indices
// Relevance: Imagine you're a chef preparing for a large event. You have an array listing missing kitchen items. Using a loop could efficiently create a shopping reminder for each item. Such practical uses of loops streamline preparation and reduce the risk of forgetting a crucial tool.

// Problem: Combine a for..in loop with string concatenation to list kitchen items from an array.

// Procedure:

//------> Declare an array 'kitchenItems' with a list of items.
// Write a 'for..in' loop to iterate through 'kitchenItems'.
// Concatenate each item in the loop with a statement to form a sentence.
// Log these sentences to the console.
// Ensure sentences are grammatically correct and contain the correct items.
//TODO: Code:

//TODO: Check For Understanding: If you have an array of chores, how can you use a loop to format and print out a statement for each chore to be done?

// Looping over object properties
// Relevance: Consider a scenario where you are tasked with creating a user directory. You have objects representing users with properties like name, age, and occupation. Looping through these properties allows you to systematically display user information on a webpage, enabling an intuitive user experience.

// Problem: Write a function that prints only the properties of 'fakeProfile' using a for..in loop.

// Procedure:

// Define the object 'fakeProfile' with the given properties.
// Declare a function 'propertyList' that will loop through the object.
// Inside the function, write a 'for..in' loop that iterates over 'fakeProfile'.
// In the loop, print out each property name.
// Invoke 'propertyList' to ensure property names are correctly logged.
//TODO: Code:

// const fakeProfile = {
//   name: "Julio Gonzales",
//   age: "23",
//   occupation: "Software Engineer",
// };
// function propertyList() {
//   for (let property in fakeProfile) {
//     console.log(fakeProfile[property]);
//   }
// }

// propertyList();

//TODO: Check For Understanding: How would you output the names of the days from a 'weekDays' object containing day names as properties?

// Looping over object properties
// Relevance: As a developer working on an employee management system, envision needing to display both property names and values for quick reference profiles. Looping to access this data is integral to automating such tasks and improving administrative efficiency.

// Problem: Print both the properties and values of 'fakeProfile' side-by-side.

// Procedure:

// Utilize the pre-defined object 'fakeProfile'.
// Declare a new function 'propertyAndValueList'.
// Within this function, create a 'for..in' loop over 'fakeProfile'.
// Print both the property and its value side-by-side in the loop.
// Call 'propertyAndValueList' to test the output.
//TODO: Code:

//TODO: Check For Understanding: Given an object 'studentScores' with students' names as properties and scores as values, how would you print each student's name and score?

//***********-------> Sprint Challenge Preview**********************
// Challenge 7: The stripX Function
// Objective: Create a function that removes all instances of the letter 'x' from a given string.

// Functionality:

// The function named stripX takes a single string argument.
// It returns a new string with all occurrences of the letter 'x' removed.
// Conditions:

// The function must handle any string provided to it.
// It should ignore the case of the letter 'x', removing both 'X' and 'x' if present.
// Hints:

// Convert the string into an array of characters using the split method.
// Create a result array to hold the filtered characters.
// Loop over the character array and add characters to the result array only if they are not 'x' or 'X'.
// Use the join method to convert the result array back into a string before returning it.
// Procedure:

// Define the function stripX that accepts one string parameter.
// Split the input string into an array of characters.
// Create an empty array to store the result.
// Loop over the array of characters and conditionally add to the result if not 'x'.
// Recombine the result array into a string using join.
// Return the new string.
//TODO: Code:

// Conclusion
// Congratulations! You now have demystified JavaScript loops and understood their practical utilization. By printing arrays and accessing object properties, you've become familiar with 'for..in' loops. Through our exercises, you've seen how looping can efficiently process data, paving the way for streamlined coding in a variety of real-world scenarios.
