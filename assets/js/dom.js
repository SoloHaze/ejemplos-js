//DOM: Document object model

//asociar constante ttulo al h1 del index.html
const tituloHTML = document.getElementById("titulo");
console.log(tituloHTML.textContent)
tituloHTML.textContent = "Modifico titulo";
tituloHTML.classList.add("titulo")

const parrafo = document.querySelector("p");
console.log(parrafo.textContent);
parrafo.textContent = "Ahora eres otro parrafo";

const elementos = document.querySelectorALl("li");
console.log(elementos)
for (let elemento of elementos) {
    console.log(elemento.textContent);    
}

//crear un forof para recorrer el form y sacar cada elemento
const form = document.querySelector("form");
console.log(form.textContent);
form.forEach(e => console.log(e.textContent));


const enlacePintura = document.querySelector("a");
enlacePintura.setAttribute("href", "contacto.html");// le da el valor al atributo href="contacto.html" en el <a>


const subtitulo = document.getElementById("subtitulo");
subtitulo.style.color ="red";
subtitulo.style.fontSize = "50px";


const frase = document.createElement("p");
frase.textContent = "super frase 1";

const contenedor = document.getElementById("contenedor");
contenedor.appendChild(frase);

//Lo mismo para una lista

let frases = ["frase 1", "frase 2", "frase 3","frase 4"];//esta debera ser la lista de pinturas
frases.push("frase 5");
const contenedorLista = document.getElementById("contenedor-lista");
for (let f of frases) {
    const p = document.createElement("p");//se crean 3 parrafos para que recorra
    p.textContent = f;
    contenedorLista.appendChild(p);
}