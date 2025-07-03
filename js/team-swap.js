// Array of headings and image URLs
const content = [
  { name: "SoR - Bandit", img: "../images/bandit-bg.jpg"},
  { name: "SoR - Quick Draw", img: "../images/quickdraw-bg.jpeg"},
  { name: "SoR - Gunslinger", img: "../images/gunslinger-bg.jpeg"},
  { name: "SoR - Viper", img: "../images/viper-bg.jpeg"},
  { name: "SoR - Red Back", img: "../images/redback-bg.jpeg"},
];

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
