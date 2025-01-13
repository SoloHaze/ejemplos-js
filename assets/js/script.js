let nombre = "Pedro";
let apellido = 'Diaz';
let edad = 25;
let altura = 1.75;
let usaLentes = true;
let estudia = null ;
let comuna = undefined;


const iva = 0.19;
const titulo = "SUPER PAGINA";

//Listas:
let listaProductos = [];
listaProductos.push("Celular");
listaProductos.push("Proyector");
listaProductos.push("Computador");



//depurar desarrollo
console.log(nombre);
console.log("Hola:",nombre);
console.log("Hola: "+ nombre);
console.log(`Hola: ${nombre}`);//cremilla francesa



console.log(listaProductos);
console.log(listaProductos[0]);
console.log(listaProductos[1]);
listaProductos[2] = "Notebook";

console.log(listaProductos[2]);


console.table(listaProductos);

let listaNombres = [];

listaNombres.push("Pedro");
listaNombres.push("Juan");
listaNombres.push("Diego");


listaNombres.unshift("Maria");
listaNombres.unshift("Alberta");


listaNombres.pop();//Borra la var final de la lista

listaNombres.shift();//Borra la primera variable de la lista
console.log("se eliminó a:", listaNombres.shift());
//console.log(`se eliminó a: ${listaNombres.shift()}, adios!`);


console.log(listaNombres.indexOf('Maria'));
console.log(listaNombres.indexOf('Alberta'));
console.log(listaNombres);

//Comandos para trabajar variables, constantes, listas, etc:
console.warn("-------------------------");//Imprime en amarillo
console.error("------------------------");//Imprime en Rojo

let numerito = 20;

if (numerito > 0){
    console.log("Positivo");
}else if (numerito < 0){
    console.log("Negativo");
}else {
    console.log("Neutro");
}

let valor = 50;
if (valor >=1 && valor <=20  ){
    console.log("Valor pequeño");
}else if (valor >= 21 && valor <=80){
    console.log("Valor medio");
}else if (valor >=81 && valor <=100){
    console.log("Valor alto");
}else{
    console.error("VALOR FUERA DE RANGO!!!");
}


let genero = 'f';
if(genero =='f' || genero=='F'){
    console.log("Femenino");
}else if(genero =='m' || genero == 'M'){
    console.log("Masculino");
}else{
    console.log("Otro");
}

//ciclos:
let numeritos = [5,7,-8,10,-15];

for (const numero of numeritos) {
    if(numero>0){
        console.log(`El numero: ${numero} es positivo`);
    }else if(numero<0){
        console.log(`El numero ${numero} es negativo `);
    }else{
        console.log("El 0 es neutro");
    }
}

console.log(document.getElementById("titulo") );