class Persona {
    // Propiedades
    nombre = "Homero";
    apellido = "Simpson";
    direccion = "Ave. Siempreviva";
    telefono = "635505355";
    email = "ahora@hotmail.com";
  
    // Métodos
    trabajar() {
      return "Trabaja en la planta nuclear";
    }
  
    estudiar() {
      return "Escuela primaria de Huelva";
    }
  }
  
  // Crear instancias de la clase Persona
  const homero = new Persona();
  const bart = new Persona();
  
  // Cambiar datos de Bart
  bart.nombre = "Bart";
  bart.apellido = "Simpson";
  
  // Mostrar información de Homero
  document.write(homero.nombre + " " + homero.apellido);
  document.write("<br>");
  document.write(homero.trabajar());
  document.write("<br>");
  document.write("<br>");
  
  // Mostrar información de Bart
  document.write(bart.nombre + " " + bart.apellido);
  