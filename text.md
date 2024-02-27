# Objects and Arrays

## Introduction

Welcome to the dynamic world of JavaScript objects and arrays! Today, we'll venture through the essentials of creating, manipulating, and accessing these data structures which are fundamental to organizing and managing data in JavaScript. By the end of this lesson, you will be coding your own data structures with confidence and understand how to apply them to real-world problems. For instance, imagine you're developing a superhero video game, and you need to keep track of each hero's traits dynamically. Let's embark on this exciting code adventure!
## Core Competencies

1. Declaring an object
2. Getting properties from an object
3. Setting and deleting properties
4. Declaring and array literal
5. Accessing elements in an array
6. Setting elements in an array
7. Working with array lengths
8. Splitting a string into an array

## Coding Porblems

### Declaring an Object

**Relevance:** Picture yourself working on a database for a comic book store. You've been assigned to create digital profiles for the most iconic superheroes. You'll start with Batman's alter ego, Bruce Wayne, storing his firstName, lastName, and age.

**Problem:** Create a hero object for Bruce Wayne.

**Procedure:**

- Start by declaring a new variable named 'hero'.
- Assign an object to 'hero' with keys for firstName, lastName, and age.
- Set the values for these keys based on Bruce Wayne's information.

**Code:**

```javascript
let hero = { firstName: 'Bruce', lastName: 'Wayne', age: 33 };
```
**Check For Understanding:** What is the result of reading a property that does not exist from an object in JavaScript?

### Getting properties from an object

**Relevance:** Imagine you're a developer at a pastry shop's website. You need to display information about the cakes available. For a specific carrot cake, you must retrieve and showcase the flavor on the webpage.

**Problem:** Access and log the cake's flavor property in two ways.

**Procedure:**

- Use dot notation to log the cake's flavor property to the console.
- Store the flavor property in a variable named currentFlavor using bracket notation.
- Log the value stored in currentFlavor to the console.

**Code:**

```javascript
console.log(cake.flavor);
let currentFlavor = cake['flavor'];
console.log(currentFlavor);
```
**Check For Understanding:** What is the result of the following code snippet? 

`const sentence = 'The quick brown fox'; const words = sentence.split(' '); console.log(words[5]);`

### Setting and deleting properties

**Relevance:** You're tasked with updating an animal tracking system for a zoo. A zebra was just admitted to the zoo hospital, and you need to reflect its new location in the system without compromising the existing data structure.

**Problem:** Update the zebra's location and remove its color property.

**Procedure:**

- Access the 'habitat' property of the animal object using dot notation.
- Update the habitat to 'Hospital'.
- Use the delete operator to remove the color property from the animal object.
- Log the complete animal object to the console to verify the changes.

**Code:**

```javascript
animal.habitat = 'Hospital';
delete animal.color;
console.log(animal);
```
**Check For Understanding:** What is the result of the following code snippet? 

`const letters = ['a', 'b', 'c', 'd']; for (let idx in letters) { console.log(idx, letters[idx]); }`

### Declaring an array literal

**Relevance:** As a data analyst, you need to create a representation of data types in JavaScript for a presentation. You decide to use an array to showcase examples.

**Problem:** Declare an array with one of each primitive type.

**Procedure:**

- Create a new constant named 'primitives'.
- Use array literals to define the array with one example of each primitive type.
- Add a boolean, number, string, null, and undefined values in the array.

**Code:**

```javascript
const primitives = [true, 1, 'example', null, undefined];
```
**Check For Understanding:** Why might an array include different primitive types, and how could this be useful?

Certainly! Here are the additional Problems for the specified competencies in the same markdown format:

### Accessing elements in an array

**Relevance:** Understanding how to access elements in an array is crucial for tasks like displaying a specific user's information from a list of users in a database.

**Problem:** Retrieve and log the third item in a list of top movies.

**Procedure:**

- Given an array named `topMovies`, access the third movie in the list.
- Log the name of the third movie to the console.

**Code:**

```javascript
let topMovies = ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', '12 Angry Men'];
console.log(topMovies[2]);
```

**Check For Understanding:** How do you access the last element of an array if you don't know the length of the array?

### Setting elements in an array

**Relevance:** Being able to update array elements is essential for tasks like updating a user's status or modifying an order in a shopping cart.

**Problem:** Change the rating of the second movie in a movie rating list from 4 to 5 stars.

**Procedure:**

- You have an array named `movieRatings` with integer ratings.
- Update the rating of the second movie in the array to 5 stars.
- Log the updated array to the console.

**Code:**

```javascript
let movieRatings = [5, 4, 3, 4, 5];
movieRatings[1] = 5;
console.log(movieRatings);
```

**Check For Understanding:** What happens if you set an array element at an index that is currently beyond the array's length?

### Working with array lengths

**Relevance:** The length property of an array is crucial for iterating over arrays and understanding the quantity of stored elements, which is essential for inventory systems, user lists, etc.

**Problem:** Add a new item to a grocery list and then log the updated length of the list.

**Procedure:**

- You have an array named `groceryList`.
- Add a new item, 'Bread', to the end of the array.
- Log the new length of the array to the console.

**Code:**

```javascript
let groceryList = ['Milk', 'Eggs', 'Cheese'];
groceryList.push('Bread');
console.log(groceryList.length);
```

**Check For Understanding:** How does modifying the length property of an array directly affect the array's contents?

### Splitting a string into an array

**Relevance:** Splitting a string into an array can be useful for tasks like processing user input or parsing data files, where you need to work with individual elements.

**Problem:** Split a sentence into words and then find the length of the resulting array.

**Procedure:**

- Given a string `sentence`, use the `split` method to divide it into an array of words.
- Log the length of the resulting array to the console.

**Code:**

```javascript
const sentence = 'Hello world, welcome to the universe.';
const words = sentence.split(' ');
console.log(words.length);
```

**Check For Understanding:** What delimiter would you use to split a string of CSV (Comma-Separated Values) into an array?

## Sprint Challenge Preview

### Challenge: The Object Builder

**Objective:** Create a function named buildUser that returns an object based on the inputs it receives.

**Functionality:**
- The function buildUser accepts three arguments: firstName, lastName, and age.'
- 'It returns an object with properties set as firstName, lastName, and age.'

**Conditions:**
- Use the given arguments to set the properties on the user object.
- The returned object should exactly match the structure of the example usage.

**Hints:**
- Begin by declaring the function buildUser with the specified parameters.
- Inside the function, return an object literal with the properties set to the function's arguments.

**Procedure:**
- Define the function buildUser with firstName, lastName, and age as parameters.
- Within buildUser, return an object with keys matching the parameters and the corresponding values.
- Test the function to ensure it returns the correct object structure.

**Code:**

```javascript
function buildUser(firstName, lastName, age) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age
  };
}
```

## Conclusion

Throughout this lesson, we dove into the practical and essential aspects of JavaScript objects and arrays. Through vivid scenarios and varied exercises, you've learned the fundamental operations for these structures including: declaration, property access, updates, and array manipulations. As we wrap up, reflect on how you can apply these tools to bring order to complex data and solve problems with cleaner, more readable code. Moving forward, these skills will be a trusty sidekick in your development journey!