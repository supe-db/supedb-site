/*gets html class nammed 'ham-menu'*/
const hamMenu = document.querySelector(".ham-menu");

/*gets html class named 'nav-sidescreen'*/
const sideScreen = document.querySelector(".nav-sidescreen");

/*On click of the ham-menu, call a lambda (aka hash rocket) function that toggles the 'active' 
  pseudo class ON/OFF for two defined classes named. The classList must be retrieved for each
  class because the active pseudo class is a subclass for the defined classes.*/
hamMenu.addEventListener("click", () => {
	hamMenu.classList.toggle("active");
	sideScreen.classList.toggle("active");
});