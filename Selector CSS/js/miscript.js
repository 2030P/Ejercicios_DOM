window.onload = function(){
    const botonCopiar = document.getElementById('copiar')
    botonCopiar.addEventListener('click', fCopiar)
}
function fCopiar(){
    let textParaCopiar = document.querySelector(".texto"). textContent
    let destino=document.querySelector("p")
    destino.textContent = textParaCopiar
}