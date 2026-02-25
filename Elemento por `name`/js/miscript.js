window.onload = function(){
const botonEnviar = document.getElementById('enviar');
botonEnviar.addEventListener('click',mostrar);
}
function mostrar(){
    let campos = document.getElementsByName("menu")
    campos.forEach(function(v){
if (v.checked)
    alert("Elegiste: "+v.value)
    });
}