

// create an empty array to store objects
const people = [{
    name:"John oils",
    personelId:155
}];


function generateName() {
    const possibleChars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
    const nameLength = 10;
    let newName = '';
    
    for (let i = 0; i < nameLength; i++) {
      const randomIndex = Math.floor(Math.random() * possibleChars.length);
      newName += possibleChars[randomIndex];
    }
    
    return newName;
 }

 function updateDisplay() {
    // get a reference to the div to populate
    const displayDiv = document.getElementById('my-personel');
    
    // create a new HTML string to populate the div
    let htmlString = '';
    for (let i = 0; i < people.length; i++) {
      const person = people[i];
      htmlString += `<div class="wanted-personal-security-div">
      <div>
          <div class="personal-security-information-div">
              <div class="character-box">
                  <img class="character-image" src="./assets/character.png" />
                  </div>
              <div class="information-text-div">
              <div >
                  <p class="personel-name">${person.name}</p>
                  <div class="personel-information">
                      <p class="dull-personel-information-text">SOME INFORMATION</p>
                      <div class="warrant-dot"></div>
                      <p class="dull-personel-information-text">SOME INFORMATION</p>
                      <div class="warrant-dot"></div>
                      <p class="dull-personel-information-text">ID: ${person.personelId}</p>
                  </div>
              </div>
              <div class="warrant-action-div">
                  <button class="rejected-action-btn">
                      WANTED
                  </button>
                 
              </div>

              </div>
              
          </div>

      </div>
  </div>`;
    }
    
    // set the div's innerHTML to the new HTML string
    displayDiv.innerHTML = htmlString;
  }



function addPerson() {
    // create a new object with the given name and age
    const name = generateName();
    const personelId = 18;

    const personel = { name, personelId};
    
    // add the object to the people array
    people.push(personel);
    
    // update the div with the new person's information
    updateDisplay();
  }

