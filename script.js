// -------------------------------------------- Exit Navbar --------------------------------------------
const navDropdown = document.querySelector(".link-background");
const navButton = document.querySelector(".nav-button");


navDropdown.style.top = "-100vh";

function exitNavbar (){
    if (navDropdown.style.top === "-100vh") {
        navDropdown.style.top = "0";
    } else {
        navDropdown.style.top = "-100vh"; 
    }

    if (navDropdown.style.top === "-100vh") {
        navButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        navButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
}

navButton.addEventListener("click", exitNavbar);



// -------------------------------------------- Darkmode --------------------------------------------
const darkmodeButton = document.querySelector(".background-switch-darkmode");
const darkmodeCircle = document.querySelector(".switch-circle");

function switchDarkmode (){
   document.body.classList.toggle("darkmode-mode");

   if (document.body.classList.contains("darkmode-mode")) {
        darkmodeCircle.innerHTML = '<i class="fa-solid fa-moon shadow"></i>';
        darkmodeCircle.style.animation = "slide-to-right-click 0.3s forwards";
    } else {
        darkmodeCircle.innerHTML = '<i class="fa-regular fa-moon shadow"></i>';
        darkmodeCircle.style.animation = "slide-to-left-click 0.3s forwards";
    }

}

darkmodeButton.addEventListener("click", switchDarkmode);

