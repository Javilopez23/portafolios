let usuario, clave, control;

control = 0;
usuario = prompt("Ingrese usuario...");
clave = prompt("Ingrese su contraseña");

do {
    if (clave !== "Javilopez23!") {
        clave = prompt("Contraseña incorrecta\nIntente de nuevo:");
    } else {
        control = 1; // Cambiamos el control a 1 para salir del bucle
    }
} while (control !== 1);

document.write("Acceso correcto, bienvenido " + usuario + "!");