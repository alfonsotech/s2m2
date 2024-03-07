// ## Sprint Challenge Preview

// ### Challenge: The Object Builder

// **Objective:** Create a function named buildUser that returns an object based on the inputs it receives.

// **Functionality:**
// - The function buildUser accepts three arguments: firstName, lastName, and age.'
// - 'It returns an object with properties set as firstName, lastName, and age.'

// **Conditions:**
// - Use the given arguments to set the properties on the user object.
// - The returned object should exactly match the structure of the example usage.

// **Hints:**
// - Begin by declaring the function buildUser with the specified parameters.
// - Inside the function, return an object literal with the properties set to the function's arguments.

// **Procedure:**
// - Define the function buildUser with firstName, lastName, and age as parameters.
// - Within buildUser, return an object with keys matching the parameters and the corresponding values.
// - Test the function to ensure it returns the correct object structure.

function buildUser(firstName, lastName, age) {
  console.log(firstName, lastName, age);
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
}

console.log("1", buildUser("Rachel", "Castro", 25));
console.log("2", buildUser("Kamil", "Patino", 30));

 
// ## Conclusion

// Throughout this lesson, we dove into the practical and essential aspects of JavaScript objects and arrays. Through vivid scenarios and varied exercises, you've learned the fundamental operations for these structures including: declaration, property access, updates, and array manipulations. As we wrap up, reflect on how you can apply these tools to bring order to complex data and solve problems with cleaner, more readable code. Moving forward, these skills will be a trusty sidekick in your development journey!
