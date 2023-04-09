

// create an empty array to store objects
// const people = [];

// // get the form element and listen for the submit event
// const form = document.getElementById("myForm");
// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // prevent form submission

//   // get the values of the input fields
//   const name = document.getElementById("name").value;
//   const age = document.getElementById("age").value;
//   const email = document.getElementById("email").value;

//   // create a new object with the input values
//   const person = { name, age, email };

//   // add the new object to the array
//   people.push(person);

//   // clear the input fields
//   form.reset();

//   // update the list of objects displayed in the HTML
//   const list = document.getElementById("list");
//   list.innerHTML = ""; // clear the list
//   people.forEach((person) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${person.name}, ${person.age}, ${person.email}`;
//     list.appendChild(listItem);
//   });
// });



// <form id="myForm">
//   <label for="name">Name:</label>
//   <input type="text" id="name" name="name"><br>

//   <label for="age">Age:</label>
//   <input type="number" id="age" name="age"><br>

//   <label for="email">Email:</label>
//   <input type="email" id="email" name="email"><br>

//   <button type="submit">Submit</button>
// </form>
