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
let item = [];
let price = [];

let showItem = "";
let showPrice = 0;
let kurvcheck = false;

function tilfoejTilKurv(){

    let karryinput = parseFloat(karry.value);
    let yakisobainput = parseFloat(yakisoba.value);
    let sushiinput = parseFloat(sushi.value);
    let person = parseFloat(sushi.value);

    if (yakisobainput > 0){
        item.push("Yakisoba");
        sessionStorage.setItem("yakisoba", yakisobainput);
        kurvcheck = true;
    }   

    if (karryinput > 0){
        item.push("Japansk Karry");
        sessionStorage.setItem("karry", karryinput);
        kurvcheck = true;
    }

    if (sushiinput > 0){
        item.push("Sushi Kugler");
        sessionStorage.setItem("sushi", sushiinput);
        kurvcheck = true;

    }
    return kurvcheck;
    // console.log(kurvcheck);
}
// if(kurvcheck === true) {
//         efterklik.style.display = "block";
//     } else {
//         efterklik.style.display = "none";
//     }
    
// console.log(kurvcheck)
if (fuldKurv !== null || tomKurv !== null ){
    if (kurvcheck === null || kurvcheck === false ){
        tomKurv.style.display = "block";
        fuldKurv.style.display = "none";
    } else {
        fuldKurv.style.display = "block";
        tomKurv.style.display = "none";
        
        }
}

if ( document.getElementById("demo") !== null){
    let yakisobaamount = sessionStorage.getItem("yakisoba");
    document.getElementById("demo").innerHTML = yakisobaamount;
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

