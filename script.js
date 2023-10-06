const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a"); /*dette er et array - alle med classnamet nav-links indsættes */
const yakisoba = document.getElementById("yakisobanrretter");
const karry = document.getElementById("karrynrretter");
const sushi = document.getElementById("sushinrretter");
const personer = document.getElementById("person");
const ikurv = document.getElementById("ikurv");
const drypRisDiv = document.getElementById("drypris");
const fyldDiv = document.getElementById("fyld");
const blandDiv = document.getElementById("bland");
const kugleDiv = document.getElementById("kugle");
const tomKurv = document.getElementById("tomkurv");
const fuldKurv = document.getElementById("kurv");
const efterklik = document.getElementById("efterklik");
const insPersoner = document.getElementById("insPersoner");
const insYaki = document.getElementById("insYaki");
const insKarry = document.getElementById("insKarry");
const insSushi = document.getElementById("insSushi");
const yakiDiv = document.getElementById("yakiDiv");
const karryDiv = document.getElementById("karryDiv");
const sushiDiv = document.getElementById("sushiDiv");
const samlet = document.getElementById("samletPris");

const ingredienser2 = document.getElementById("ingredienser2");
const ingredienser4 = document.getElementById("ingredienser4");
const ingredienser6 = document.getElementById("ingredienser6");
const ingredienser8 = document.getElementById("ingredienser8");
const ingredienser10 = document.getElementById("ingredienser10");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const portioner = document.getElementById("portioner");


let maengde = 2;
if (ingredienser2 !== null || 
    ingredienser4 !== null || 
    ingredienser6 !== null || 
    ingredienser8 !== null || 
    ingredienser10 !== null|| 
    plus !== null || 
    minus !== null || 
    portioner !== null) {
    
        if (maengde = 2) {
            ingredienser2.style.display = "flex";
            ingredienser4.style.display = "none";
            ingredienser6.style.display = "none";
            ingredienser8.style.display = "none";
            ingredienser10.style.display = "none";
        }
        if (maengde = 4) {
            ingredienser2.style.display = "none";
            ingredienser4.style.display = "flex";
            ingredienser6.style.display = "none";
            ingredienser8.style.display = "none";
            ingredienser10.style.display = "none";
        }
        if (maengde = 6) {
            ingredienser2.style.display = "none";
            ingredienser4.style.display = "none";
            ingredienser6.style.display = "flex";
            ingredienser8.style.display = "none";
            ingredienser10.style.display = "none";
        }
        if (maengde = 8) {
            ingredienser2.style.display = "none";
            ingredienser4.style.display = "none";
            ingredienser6.style.display = "none";
            ingredienser8.style.display = "flex";
            ingredienser10.style.display = "none";
        }
        if (maengde = 10) {
            ingredienser2.style.display = "none";
            ingredienser4.style.display = "none";
            ingredienser6.style.display = "none";
            ingredienser8.style.display = "none";
            ingredienser10.style.display = "flex";
        }
        portioner.innerHTML = maengde;
}

function fjernPortioner(){
    maengde -= 2;
    if (maengde < 2){
        maengde = 2;
    }
}

function tilfoejPortioner(){
    maengde += 2;
    if (maengde > 10){
        maengde = 10;
    }
}


let kurvcheck = false;

function tilfoejTilKurv(){
    let karryinput = parseFloat(karry.value);
    let yakisobainput = parseFloat(yakisoba.value);
    let sushiinput = parseFloat(sushi.value);
    let person = parseFloat(personer.value);

    if (person > 0){
        sessionStorage.setItem("person", person);
        sessionStorage.setItem("kurvcheck", true);
    }

    if (!Number.isNaN(yakisobainput) && yakisobainput > 0){
        sessionStorage.setItem("yakisoba", yakisobainput);
        sessionStorage.setItem("kurvcheck", true);
    } else {
        sessionStorage.setItem("yakisoba", 0);
        sessionStorage.setItem("kurvcheck", true);
    }   

    if (!Number.isNaN(karryinput) && karryinput > 0){
        sessionStorage.setItem("karry", karryinput);
        sessionStorage.setItem("kurvcheck", true);
    } else {
        sessionStorage.setItem("karry", 0);
        sessionStorage.setItem("kurvcheck", true);
    }

    if (!Number.isNaN(sushiinput) && sushiinput > 0){
        sessionStorage.setItem("sushi", sushiinput);
        sessionStorage.setItem("kurvcheck", true);
    } else {
        sessionStorage.setItem("sushi", 0);
        sessionStorage.setItem("kurvcheck", true);      
    }

    //samler prisen for alle input
    let totalretter = (sushiinput + karryinput + yakisobainput) * person;
    console.log(totalretter);
    let totalpris = totalretter * 50;
    console.log(totalpris);
    sessionStorage.setItem("totalpris", totalpris);
    console.log(sessionStorage.getItem("totalpris"));
    console.log(sessionStorage.getItem(karryinput));
    console.log(sessionStorage.getItem(yakisobainput));
    console.log(sessionStorage.getItem(sushiinput));
    console.log(sessionStorage.getItem(person));
}

function fjernIndhold() {
    sessionStorage.removeItem("person");
    sessionStorage.removeItem("yakisoba");
    sessionStorage.removeItem("karry");
    sessionStorage.removeItem("sushi");
    sessionStorage.removeItem("kurvcheck");
    sessionStorage.removeItem("totalpris");
    tomKurv.style.display = "block";
    fuldKurv.style.display = "none";
    }

//skifter inde på bestillingssiden mellem tilføj knap og gå vidre knapperne
function toggleKnap(){
if(efterklik.style.display = "none") {
        efterklik.style.display = "flex";
        ikurv.style.display = "none";
    } else {
        efterklik.style.display = "none";
    }
}
    
// console.log(kurvcheck)

//Tjekker om man er inde på kurven
if (fuldKurv !== null || tomKurv !== null ){
    //tjekker om der er noget i kurven og skifter mellenm hvad der er i kurven
    if (sessionStorage.getItem("kurvcheck") === null ){
        tomKurv.style.display = "block";
        fuldKurv.style.display = "none";
    } else {
        fuldKurv.style.display = "block";
        tomKurv.style.display = "none";
        
    }
        
    
    if (sessionStorage.getItem("person") > 0){
        insPersoner.innerHTML = sessionStorage.getItem("person");
    } 

    if (sessionStorage.getItem("yakisoba") > 0){
        insYaki.innerHTML = sessionStorage.getItem("yakisoba");
    }  else {
        yakiDiv.style.display = "none";
    } 

    if (sessionStorage.getItem("karry") > 0){
        insKarry.innerHTML = sessionStorage.getItem("karry");
    }  else {
        karryDiv.style.display = "none";
    } 

    if (sessionStorage.getItem("sushi") > 0){
        insSushi.innerHTML = sessionStorage.getItem("sushi");
    }  else {
        sushiDiv.style.display = "none";
    } 
samlet.innerHTML =sessionStorage.getItem("totalpris");






    if ( document.getElementById("demo") !== null){
        let yakisobaamount = sessionStorage.getItem("yakisoba");
        document.getElementById("demo").innerHTML = yakisobaamount;
    }
}


    
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

/* Vis/skjul alle div'er med film til børn i sushikugle opskriften */
function toggleDrypRis() {
    if(drypRisDiv.style.display === "none") {
        drypRisDiv.style.display = "block";
    } else {
        drypRisDiv.style.display = "none";
    }
}

function toggleFyld() {
    if(fyldDiv.style.display === "none") {
        fyldDiv.style.display = "block";
    } else {
        fyldDiv.style.display = "none";
    }
}

function toggleBland() {
    if(blandDiv.style.display === "none") {
        blandDiv.style.display = "block";
    } else {
        blandDiv.style.display = "none";
    }
}

function toggleKugle() {
    if(kugleDiv.style.display === "none") {
        kugleDiv.style.display = "block";
    } else {
        kugleDiv.style.display = "none";
    }
}
/*Start/pause af alle videoer i børnelayoutet*/
function toggleVideo(videoId) {
    const video = document.getElementById(videoId);
    console.log(videoId);
    const isVideoPlaying = !video.paused; 
    console.log(isVideoPlaying);
    if(isVideoPlaying) {
        video.pause();
    } else {
        video.play();
    }
}

function toggleVideo(videoId) {
    const video = document.getElementById(videoId);
    console.log(videoId);
    const isVideoPlaying = !video.paused; 
    console.log(isVideoPlaying);
    if(isVideoPlaying) {
        video.pause();
    } else {
        video.play();
    }
}

let omlist = document.getElementById("omlist");
omlist.style.display = "none";

function openDropdown(){
    if (omlist.style.display != "none"){
        omlist.style.display = "none";
    } else {
        omlist.style.display = "block";
    }
}


// login og signup siden

let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

if (signup !== null && login !==null){
    signup.addEventListener("click", () => {
        slider.classList.add("moveslider");
        formSection.classList.add("form-section-move");
    });

    login.addEventListener("click", () => {
        slider.classList.remove("moveslider");
        formSection.classList.remove("form-section-move");
    });

}

