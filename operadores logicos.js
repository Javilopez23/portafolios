// operadore && (y)
/*
let continente, edad; 
continente = prompt("INGRESE SU CONTINENTE...");
edad = prompt("INGRESE SU EDAD...");

// Convertir edad a número
edad = parseInt(edad, 10);

if (continente === "America" && edad >= 18) {
    document.write("Eres un adulto americano");
} else {
    document.write("O no eres americano, o no eres mayor de edad");
}*/

let dia, mes, anio;

dia = prompt("ingrese dia");
mes = prompt("ingrese mes");
anio = prompt("ingrese año");

if (mes == 1 || mes == 2 || mes == 3 ) {
    document.write("perteneces al primer trimestre.");
}
    else{
    document.write(" No pertenece al primer trimestre.");
}