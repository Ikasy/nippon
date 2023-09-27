const navSlide = () => { /* dette er en funktion, der kaldes helt nede i bunden (navSlide() ) */
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a"); /*dette er et array - alle med classnamet nav-links indsættes */
  
burger.addEventListener("click", () => { /* lytter efter hvornår der clickes og starter funktionen derefter */
    nav.classList.toggle("nav-active"); 
  
    navLinks.forEach((link, index) => {  /* gennemløb af alle elementer med class'en nav-links */ 
    if (link.style.animation) {
        link.style.animation = ""; /* slukker animation */
    } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.5 }s `;
    } /* starter animation med tidsforskudning fra top mod bund (hvorfor linksene gradvist fremkommer) */
    });
    burger.classList.toggle("toggle"); /* well... toggler burgeren ;) så starter forfra */
    });
  };
  
  navSlide(); /* funktion kaldes */
  
let omlist = document.getElementById("omlist");
let blogjs = document.getElementById("blogjs")
omlist.style.display = "none";

function openDropdown(){
    if (omlist.style.display != "none"){
        omlist.style.display = "none"
    } else {
        omlist.style.display = "block";
        blogjs.style.display = "block";
    }
}