let nombre, edad;
nombre = prompt("ingrese su nombre")
edad = prompt("ingrese su edad")
edad = parseInt(edad)

if(edad >= 18) 
    document.write("BIENVENIDO! " , nombre);
else{
    if(edad < 18){
document.write("ERES MENOR DE EDAD")
    }
    else{
document.write("NO HAS INGRESADO DATOS")
    }



}
