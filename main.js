const dropdownButton = document.querySelector("button")
const dropdownMenu = document.querySelector(".dropdownMenu")
dropdownButton.addEventListener('click', () =>{
dropdownMenu.classList.toggle("hidden")
})

window.addEventListener('click', () =>{
    if (e.target !== dropdownButton){
        dropdownMenu.classList.add("hidden")
    }


})