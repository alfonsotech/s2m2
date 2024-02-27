// ### Declaring an array literal

// **Relevance:** As a data analyst, you need to create a representation of data types in JavaScript for a presentation. You decide to use an array to showcase examples.

// **Problem:** Declare an array with one of each primitive type.

// **Procedure:**

// - Create a new constant named 'primitives'.
// - Use array literals to define the array with one example of each primitive type.
// - Add a boolean, number, string, null, and undefined values in the array.

// **Code:**

const primitives = [true, 1, "example", null, undefined];

// **Check For Understanding:** Why might an array include different primitive types, and how could this be useful?

// Certainly! Here are the additional Problems for the specified competencies in the same markdown format:

// ### Accessing elements in an array

// **Relevance:** Understanding how to access elements in an array is crucial for tasks like displaying a specific user's information from a list of users in a database.

// **Problem:** Retrieve and log the third item in a list of top movies.

// **Procedure:**

// - Given an array named `topMovies`, access the third movie in the list.
// - Log the name of the third movie to the console.

// **Code:**

let topMovies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "12 Angry Men",
];
console.log(topMovies[2]);

// **Check For Understanding:** How do you access the last element of an array if you don't know the length of the array?

// ### Setting elements in an array

// **Relevance:** Being able to update array elements is essential for tasks like updating a user's status or modifying an order in a shopping cart.

// **Problem:** Change the rating of the second movie in a movie rating list from 4 to 5 stars.

// **Procedure:**

// - You have an array named `movieRatings` with integer ratings.
// - Update the rating of the second movie in the array to 5 stars.
// - Log the updated array to the console.

// **Code:**

let movieRatings = [5, 4, 3, 4, 5];
movieRatings[1] = 5;
console.log(movieRatings);

// **Check For Understanding:** What happens if you set an array element at an index that is currently beyond the array's length?

// ### Working with array lengths

// **Relevance:** The length property of an array is crucial for iterating over arrays and understanding the quantity of stored elements, which is essential for inventory systems, user lists, etc.

// **Problem:** Add a new item to a grocery list and then log the updated length of the list.

// **Procedure:**

// - You have an array named `groceryList`.
// - Add a new item, 'Bread', to the end of the array.
// - Log the new length of the array to the console.

// **Code:**

let groceryList = ["Milk", "Eggs", "Cheese"];
groceryList.push("Bread");
console.log(groceryList.length);

// **Check For Understanding:** How does modifying the length property of an array directly affect the array's contents?

// ### Splitting a string into an array

// **Relevance:** Splitting a string into an array can be useful for tasks like processing user input or parsing data files, where you need to work with individual elements.

// **Problem:** Split a sentence into words and then find the length of the resulting array.

// **Procedure:**

// - Given a string `sentence`, use the `split` method to divide it into an array of words.
// - Log the length of the resulting array to the console.

// **Code:**

const sentence = "Hello world, welcome to the universe.";
const words = sentence.split(" ");
console.log(words.length);

// **Check For Understanding:** What delimiter would you use to split a string of CSV (Comma-Separated Values) into an array?
