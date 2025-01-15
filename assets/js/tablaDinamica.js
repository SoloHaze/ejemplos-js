let pinturas = [
    {
        pintura: "Arbol de la creacion", descripcion: "arbolito", precio: "$5000 dolares",autor: "Desconocido", tecnicaUsada: "Óleo",estado: "aprobado",
    },
    {
        pintura: "Arbol de la creacion", descripcion: "arbolito", precio: "$5000 dolares",autor: "Desconocido", tecnicaUsada: "Óleo",estado: "aprobado",
    },
    {
        pintura: "Arbol de la creacion", descripcion: "arbolito", precio: "$5000 dolares",autor: "Desconocido", tecnicaUsada: "Óleo",estado: "aprobado"
    }
]

if(!localStorage.getItem("pinturas")){
    localStorage.setItem("pinturas", JSON.stringify(pinturas))
}
function crearTabla(){
    const principal = document.getElementById("principal");
    
    const tabla = document.createElement("table");
    tabla.classList.add("table","table-striped","table-hover");
    
    tabla.innerHTML = `
        <thead>
            <th>Pintura</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Autor</th>
            <th>Tecnica Usada</th>
        </thead>
        <tbody id="cuerpo-tabla"></tbody>
    `;

    principal.appendChild(tabla);
}



function cargarPinturas(){

    const cuerpoTabla = document.getElementById("cuerpo-tabla");



    cuerpoTabla.innerHTML = '';
    let pinturasLocal = JSON.parse(localStorage.getItem("pinturas"));
    pinturasLocal.forEach(p => {
        //console.log(p);
        if(p.estado == 'aprobado'){
            const filaTabla = document.createElement("tr");
            filaTabla.innerHTML = `
                <td>${p.pintura}</td>
                <td>${p.descripcion}</td>
                <td>${p.precio}</td>
                <td>${p.autor}</td>
                <td>${p.tecnicaUsada}</td>
            
            `;
    
            cuerpoTabla.appendChild(filaTabla);


        }

    })

}

function recargar(){

    cargarPinturas();

}



crearTabla();
//cargarPinturas();

//La funcion saludar se invoca con el click de un boton
function saludar(){

    let saludo = "Hola mundo";
    alert(saludo);
}

//botones con js
/*
const btnAgregar = document.getElementById("btn-agregar");
btnAgregar.addEventListener("click", ()=>{
    alert("Hola");
});
*/
//Este metodo hace que 
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();//prevetnDefault, evita la recarga de la pagina cdo se da click al submit

    const nombre = document.getElementById("nombre");
    const precio = document.getElementById("precio");

    if(!nombre.value().trim()){
        alert('El nombre de la pintura es obligatorio');
        return;
    }else if(!precio.value().trim()){
        alert('El campo precio es obligatorio')
        return;
    }
    let pinturasLocal = JSON.parse(localStorage.setItem("pintura"));

    let pintura = {id: pinturasLocal.length+1,pintura: nombre.value.trim(),
          descripcion: "arbolito",
          precio: precio.value().trim(), 
          autor: "Desconocido",
          tecnicaUsada: "Óleo",
          estado: "aprobado"
    }
    pinturasLocal.push(pintura)
    localStorage.setItem("pinturas", JSON.stringify(pinturasLocal))

    pinturas.push();
    alert('pintura agregada con éxito');
    cargarPinturas();

    nombre.innerText = '';
    precio.innerText = '';
    
});

//se guarda con una function las pinturas en el local storage


let pint = {id: "3",
    pintura: "Arbolito",
    descripcion: "arbolito",
    precio: "5000", 
    autor: "Desconocido",
    tecnicaUsada: "Óleo",
    estado: "aprobado"
}



/*
localStorage.setItem("pinturas","pinturita");

let pint = {id: "3",
    pintura: "Arbolito",
    descripcion: "arbolito",
    precio: "5000", 
    autor: "Desconocido",
    tecnicaUsada: "Óleo",
    estado: "aprobado"
}
localStorage.setItem("pint",JSON.stringify(pint));

let lista =[{id: "3",
pintura: "Arbolito",
descripcion: "arbolito",
precio: "5000", 
autor: "Desconocido",
tecnicaUsada: "Óleo",
estado: "aprobado"
}];
localStorage.setItem("pintura", JSON.stringify(lista))

console.warn(localStorage.getItem("pint"))
console.warn(JSON.parse(localStorage.getItem("lista")))

let listaRecuperada = JSON.parse(localStorage.getItem("lista"));
listaRecuperada.forEach(p =>{
    console.log(p);
});
console.log(listaRecuperada);

localStorage.clear();
*/
