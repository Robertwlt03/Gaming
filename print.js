const print_button = document.querySelector(".print-button");


function openPrinter (){
    window.print()
}
print_button.addEventListener("click", openPrinter);