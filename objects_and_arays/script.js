console.log("hello from the js file");

// # Objects and Arrays

// ## Introduction

// Welcome to the dynamic world of JavaScript objects and arrays! Today, we'll venture through the essentials of creating, manipulating, and accessing these data structures which are fundamental to organizing and managing data in JavaScript. By the end of this lesson, you will be coding your own data structures with confidence and understand how to apply them to real-world problems. For instance, imagine you're developing a superhero video game, and you need to keep track of each hero's traits dynamically. Let's embark on this exciting code adventure!
// ## Core Competencies

// 1. Declaring an object
// 2. Getting properties from an object
// 3. Setting and deleting properties

// 4. Declaring and array literal
// 5. Accessing elements in an array
// 6. Setting elements in an array

// 7. Working with array lengths
// 8. Splitting a string into an array



// Objects

const person = {
  name: "Maria",
  age: 25,
  job: "teacher",
};

const movie = {
  title: "Frozen",
  releaseYear: 2013,
  rating: "PG",
  animated: true,
};

const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
  series: "The Lord of the Rings",
};

const product = {
  name: "iPhone 14",
  price: 999,
  color: "midnight",
  storage: 128,
};

const car = {
  make: "Honda",
  model: "Civic",
  year: 2022,
  type: "Sedan",
  mileage: 0,
};

// Getters
const movieTitle = movie.title;
bookAuthor = book["author"];

// Setters
person.name = "John";
product["color"] = "space gray";

movie["rating"] = "PG-13";
car.mileage = 1000;

// Bracket notation getters
const carMake = car["make"];
const productPrice = product["price"];

// Dot notation setters
book.pages = 350;
person.age = 40;

//delete
// Delete the job property
delete person.job;

// person is now:
// {name: 'Maria', age: 25}

// Try to access the deleted property
// console.log(person.job); // undefined

// Delete the age property
delete person["age"];

// person is now:
// {name: 'Maria'}

// Delete a non-existent property
delete person.height; // Returns true
