let dropdownContainer = document.getElementById("dropdown");
let dropdownMenu = document.getElementById("dropdownMenu");
//Add event listener to the dropdownMenu
dropdownContainer.addEventListener("click",() => {
    dropdownMenu.classList.toggle("hidden");
});