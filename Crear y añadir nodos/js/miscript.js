window.onload = function (){
    crearContenido();
}
function crearContenido (){
    let nodoTitle = DocumentTimeline.createElemente("title");
let txTitle = document.createNodeIterator("Mi pagina dinamica");
nodoTitle.appendChild(txTitle);
document.head.appendChild(nodoTitle);

let titularH1 = document.createElement("h1");
let txTitular = document.createTextNode("Pagina creada on line");
titularH1.appendChild(txTitular);
document.body.appendChild(titularH1);

let parrafoCur = document.createElement("p");
parrafoCur.setAttribute("style", "font-style: italic");
let txParrafo = document.createTextNode("Ese es el contenido de mi parrafo. Está puesto en cursiva")
parrafoCur.appendChild(txParrafo);
document.body.appendChild(parrafoCur);
}