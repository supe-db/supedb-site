// Arrays of headings and image URLs
const sorArr = [
  { name: "SoR - Bandit", img: "../../images/bandit-bg.jpg"},
  { name: "SoR - Quick Draw", img: "../../images/quickdraw-bg.jpeg"},
  { name: "SoR - Gunslinger", img: "../../images/gunslinger-bg.jpeg"},
  { name: "SoR - Viper", img: "../../images/viper-bg.jpeg"},
  { name: "SoR - Red Back", img: "../../images/redback-bg.jpeg"}
];

const tigerArr = [
  { name: "Tiger Hide", img: "../../images/tigerhide-bg.jpeg"},
  { name: "Tiger Hide - Enhanced", img: "../../images/tigerhideenhanced-bg.jpeg"}
];

const centuryArr = [
  { name: "The Century", img: "../../images/century-bg.jpeg" },
  { name: "Proto-Armor", img: "../../images/protoarmor-bg.jpeg" },
  { name: "Michael Preston", img: "../../images/michael-bg.jpeg" }
];

/*Retrieve correct array based on script id*/
let content;
let script = document.getElementById("sor-teamscript");
if(script != null)
{
	content = sorArr;
}

script = document.getElementById("tiger-teamscript");
if(script != null)
{
	content = tigerArr;
}

script = document.getElementById("century-teamscript");
if(script != null)
{
  content = centuryArr;
}

//throw an exception if no matching script was found
if(content == null)
{
	throw new Error("Array of team members is empty. Returning...");
}

//a 'let' variables cannot be redeclared in the same scope
let currentIndex = 0;

// Get references to elements
const nameElement = document.getElementById("characterName");
const imgElement = document.getElementById("characterImage");

// Add click event listener
imgElement.addEventListener("click", () => {
  // Update index
  currentIndex = (currentIndex + 1) % content.length;

  // Update the name and image
  nameElement.textContent = content[currentIndex].name;
  imgElement.src = content[currentIndex].img;
});
