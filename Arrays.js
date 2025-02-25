let numeros = []
numeros = [15,80,650,30,-10]
document.write ("elementos: " , numeros)
document.write ("</br>")
document.write ("primer elemento. " , numeros [0])
document.write ("</br>")
numeros [0] = [14]
document.write("elmentos: " , numeros)
document.write ("</br>----------------------")

let Frutas = ["manzanas","peras", "naranjas", "mangos" ]
document.write ("</br>")
document.write ("Frutas:" , Frutas)
document.write ("</br>")

//METODOS DE LOS ARRAYS

//ver cantidad de elementos

document.write("cantidad:  " , numeros.length)
document.write ("</br>")

//saber ultimo elemento
document.write("ultimo elemento" , numeros [numeros.length-1]) 
document.write ("</br>")

//arrays en tipo texto 
document.write("en string: " , numeros.toString())
document.write ("</br>")

//unir tipos de arrays
let letras = ["a","b","c"]
let numeros2 = [1,2,3]
document.write("alfanumerico: " , letras.concat(numeros2))
document.write ("</br>")

//borrar ultimo elemento
numeros.pop()
document.write (numeros)
document.write ("</br>")

//agregar elementos al final
numeros.push(500)
document.write (numeros)
document.write ("</br>")

//eleminar primer elemento
numeros.shift()
document.write(numeros)
document.write ("</br>")

//insertar elemento al inicio
numeros.unshift(1000)
document.write(numeros)
document.write ("</br>")

//eliminar elementos a partir de un punto
numeros.splice(2,3)
document.write(numeros)
document.write ("</br>")

//copiar un arrays
let cantidades = (100,200,500,600,800)
let copia = cantidades.slice (1,4)
document.write ("Array copia: " , copia)
document.write ("</br>")

document.write(Frutas.sort)