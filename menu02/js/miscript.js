window.onload = function(){
    let boton = document.getElementById("btnMenu")
    let menu = document.getElementById("Menu")

    boton.addEventListener("click", function(){
        menu.classList.toggle("mostrar")
    })
}