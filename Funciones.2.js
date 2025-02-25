function suma(a, b) {
    return Number(a) + Number(b);
}
document.write(suma(39, 45));

document.write("<br>"); // Salto de línea para separar resultados

function vercolor() {
    let valor = parseInt(prompt("Ingrese un valor (1/2/3):"));
    switch (valor) {
        case 1:
            return "rojo";
        case 2:
            return "verde";
        case 3:
            return "amarillo";
        default:
            return "Valor no válido"; // Retorno para valores fuera de 1, 2 o 3
    }
}

// Llamada a la función y mostrar el resultado
document.write(vercolor());
