//Get a reference to the dropdown menu
const dropdown = document.getElementById("characterDropdownMenu");

//Function to update the characters viewable on the screen based on series.
function updateViewableCharacters(){
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
  const body = document.body;
  body.querySelector("h1").textContent = 'Characters(' + characterCount + ')';

}

//Add an event listener to the dropdown for the 'change' event
//This will cause updateViewableCharacters() to be called when the value
//in the dropdown menu changes.
dropdown.addEventListener("change", updateViewableCharacters);

//Initial call that triggers when a page first loads
updateViewableCharacters();