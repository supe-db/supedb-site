//Get a reference to the dropdown menu
const dropdown = document.getElementById("characterDropdownMenu");

//get page title
const body = document.body;
const pageTitle = body.querySelector("h1").textContent;

//Function to update the characters viewable on the screen based on series.
function updateViewableCharacters(){

  // Remove all dummy divs of class-type 'hidden-flex-item' before
  // generating the current layout. More on this later in the function.
  const dummyDivs = document.querySelectorAll('div.hidden-flex-item');
  dummyDivs.forEach(div => div.remove());

  //get the dropdown menu's current value
  const selectedValue = dropdown.value;
  console.log("Dropdown Value:", dropdown.value);

  // Get all elements with the class name "character"
  const characters = document.getElementsByClassName("character");

  //This variable will hold a count of characters that match a given class.
  let characterCount = 0;

  //loop through all characters and only show characters from the selected
  //series
  for(let i=0; i < characters.length; i++){

    const characterName = characters[i].querySelector("h2").innerHTML;

    if( characters[i].classList.contains(selectedValue) ){
      console.log(characterName, ", display: block");
      characters[i].style.display = "block";
      characterCount++;
    }
    else{
      console.log(characterName, ", display: none");
      characters[i].style.display = "none";
    }
  }

  //Update characterTotal
  body.querySelector("h1").textContent = pageTitle + '(' + characterCount + ')';

  //Generate dummy divs to fill in the last row so that flex-grow doesn't super 
  //stretch items to fill the width of the screen. E.g. if a row has 2 items flex-
  //grow will stretch them the whole width of a screen, this code ensures each row
  //has at least 'maxItemsPerRow' which is the max number of items a normal row
  //can have. Since each row is now full (b/c of the below loop), excessive stretching 
  //won't happen.
  const maxItemsPerRow = 6;
  for(let i = 0; i < (maxItemsPerRow - (characterCount % maxItemsPerRow)); i++)
  {
    const newDummyDiv = document.createElement('div');
    newDummyDiv.className = 'hidden-flex-item';
    characters[characters.length-1].insertAdjacentElement('afterend', newDummyDiv); 
  }

}

//Add an event listener to the dropdown for the 'change' event
//This will cause updateViewableCharacters() to be called when the value
//in the dropdown menu changes.
dropdown.addEventListener("change", updateViewableCharacters);

//Initial call that triggers when a page first loads
updateViewableCharacters();