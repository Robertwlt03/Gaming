const navbar = document.querySelector(".nav");


function unhover (){
  navbar.classList.toggle("nav-unhover");

}

  navbar.addEventListener("click", unhover);