const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a"); /*dette er et array - alle med classnamet nav-links indsættes */
const yakisoba = document.getElementById("yakisobanrretter")
const karry = document.getElementById("karrynrretter")
const sushi = document.getElementById("sushinrretter")
const personer = document.getElementById("person")
const ikurv = document.getElementById("ikurv")

let item = [];
let price = [];

let showItem = "";
let showPrice = 0;

function tilfoejTilKurv(){

    let karryinput = parseFloat(karry.value);
    let yakisobainput = parseFloat(yakisoba.value);
    let sushiinput = parseFloat(sushi.value);
    let person = parseFloat(sushi.value);

    if (yakisobainput > 0){
        item.push("Yakisoba");
        console.log("0");
        sessionStorage.setItem("yakisoba", yakisobainput);
        
    }   

    if (karryinput > 0){
        item.push("Japansk Karry");
        
    }

    if (sushiinput > 0){
        item.push("Sushi Kugler");

    }

}
        let yakisobaamount = sessionStorage.getItem("yakisoba");
        document.getElementById("demo").innerHTML = yakisobaamount;

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





let omlist = document.getElementById("omlist");
omlist.style.display = "none";

function openDropdown(){
    if (omlist.style.display != "none"){
        omlist.style.display = "none"
    } else {
        omlist.style.display = "block";
    }
}