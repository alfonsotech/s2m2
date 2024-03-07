// ### Declaring an Object

// **Relevance:** Picture yourself working on a database for a comic book store. You've been assigned to create digital profiles for the most iconic superheroes. You'll start with Batman's alter ego, Bruce Wayne, storing his firstName, lastName, and age.

// **Problem:** Create a hero object for Bruce Wayne.

// **Procedure:**

// - Start by declaring a new variable named 'hero'.
// - Assign an object to 'hero' with keys for firstName, lastName, and age.
// - Set the values for these keys based on Bruce Wayne's information.

// TODO: **Code:**
const hero = {
  firstName: "Bruce",
  lastName: "Wayne",
  age: 33,
};

// TODO: **Check For Understanding:** What is the result of reading a property that does not exist from an object in JavaScript?
hero.color;
console.log(hero.color);

// ### Getting properties from an object

// **Relevance:** Imagine you're a developer at a pastry shop's website. You need to display information about the cakes available. For a specific carrot cake, you must retrieve and showcase the flavor on the webpage.

// **Problem:** Access and log the cake's flavor property in two ways.

// **Procedure:**

// - Use dot notation to log the cake's flavor property to the console.
// - Store the flavor property in a variable named currentFlavor using bracket notation.
// - Log the value stored in currentFlavor to the console.

// TODO: **Code:**
// console.log(cake.flavor); // cake.flavor
// let currentFlavor = cake["flavor"]; // cake['flavor'
// console.log(currentFlavor);
///////****************** *///////******************

// TODO: **Check For Understanding:** What is the result of the following code snippet?

const sentence = "The quick brown fox";
const words = sentence.split(" "); //tyoeof words? array
console.log(words);
console.log(words[5]); //output???

// ### Setting and deleting properties

// **Relevance:** You're tasked with updating an animal tracking system for a zoo. A zebra was just admitted to the zoo hospital, and you need to reflect its new location in the system without compromising the existing data structure.

// **Problem:** Update the zebra's location and remove its color property.

// **Procedure:**

// - Access the 'habitat' property of the animal object using dot notation.
// - Update the habitat to 'Hospital'.
// - Use the delete operator to remove the color property from the animal object.
// - Log the complete animal object to the console to verify the changes.

// TODO: **Code:**

const animal = {
  habitat: "Forest",
  color: "black and white",
};
animal.habitat = "Hospital";
delete animal.color;
console.log("animal", animal);
// TODO: **Check For Understanding:** What is the result of the following code snippet?

const letters = ["a", "b", "c", "d"];
for (let idx in letters) {
  console.log(idx, letters[idx]);
}

