//get the current page name
const path = window.location.pathname;
const pageName = path.substring(path.lastIndexOf('/') + 1);

//default character selection const value
const DEFAULT_SELECTION_CLASS = "theYesterdayMan";

//set the current selection to a default value if the current selection
//is empty OR we changed pages.
if( (localStorage.getItem('currentSelection') == null) ||
    (pageName != localStorage.getItem('pageName')) ) 
{
  localStorage.setItem('currentSelection', DEFAULT_SELECTION_CLASS);
}

//set the current page name
localStorage.setItem('pageName', pageName);

//get page title
const body = document.body;
const pageTitle = body.querySelector("h1").textContent;

//Function to update the characters viewable on the screen based on series.
function updateViewableCharacters(){

  // Remove all dummy divs of class-type 'hidden-flex-item' before
  // generating the current layout. More on this later in this function.
  const dummyDivs = document.querySelectorAll('div.hidden-flex-item');
  dummyDivs.forEach(div => div.remove());

  //get the dropdown menu's current selection
  const selectedValue = localStorage.getItem('currentSelection');
  console.log("Selected Value:", selectedValue);

  // Get all elements with the class name "character"
  const characters = document.getElementsByClassName("character");

  //This variable will hold a count of characters that match a given class.
  let characterCount = 0;

  //loop through all characters and only show characters from the selected
  //series (aka the current selection/ current value).
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

  //Update the total # of characters displayed.
  body.querySelector("h1").textContent = pageTitle + '(' + characterCount + ')';

  //Generate dummy divs to fill in the last row so that flex-grow doesn't super 
  //stretch items to fill the width of the screen. E.g. if a row has 2 items flex-
  //grow will stretch them the whole width of a screen, this code ensures each row
  //has at least 'MAX_ITEMS_PER_ROW' which is the max number of items a normal row
  //can have. Since each row is now full (b/c of the below loop), excessive stretching 
  //won't happen.
  const MAX_ITEMS_PER_ROW = 6;
  for(let i = 0; i < MAX_ITEMS_PER_ROW-1; i++)
  {
    const newDummyDiv = document.createElement('div');
    newDummyDiv.className = 'hidden-flex-item';
    characters[characters.length-1].insertAdjacentElement('afterend', newDummyDiv); 
  }

}


/*get all option menu options*/
const options = document.querySelectorAll('.option');

//Add an event listener for each 'option' for the 'click' event.
//This will trigger the below callback. The below callback sets the current selection
//and then calls the 'updateViewableCharacters' function.
options.forEach(option => {
  option.addEventListener('click', () => {
    localStorage.setItem('currentSelection', option.getAttribute('data-value'));
    updateViewableCharacters();
  })
})

//Initial call that triggers when a page first loads
updateViewableCharacters();