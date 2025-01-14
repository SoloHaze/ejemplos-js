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

    pinturas.forEach(p => {
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



crearTabla();
cargarPinturas();