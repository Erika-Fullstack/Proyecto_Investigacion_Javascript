// FUNCIONES NOMINATIVAS //

// Ejemplo 1: Declaración de una función con nombre
function saludar() {
    console.log("¡Hola, mundo!");
  }

// Llamamos a la función
saludar(); // Salida: ¡Hola, mundo!
  

// Ejemplo 2: Función con parámetros
function sumar(a, b) {
    return a + b;
  }
  
  const resultado = sumar(3, 7);
 // console.log(resultado); // Salida: 10 


 // Ejemplo 3: Función que devuelve un mensaje personalizado
 function presentar(nombre) {
    return `Hola, me llamo ${nombre}.`;
  }

// Ejemplo 4: Uso de una función nominativa dentro de otra función
function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }
  
  function describirRectangulo(base, altura) {
    const area = calcularAreaRectangulo(base, altura);
    return `Un rectángulo de base ${base} y altura ${altura} tiene un área de ${area}.`;
  }

// Ejemplo 5: Uso de una función nominativa dentro de un objeto
const calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    }
  };

//Ejemplo 6: Uso de una función nominativa como métodos dentro de las clases
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
      
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
  }

