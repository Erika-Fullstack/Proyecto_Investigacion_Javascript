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
    function operacionMatematica(a, b, operacion) {
      return operacion(a, b); 
      // Llama a la función pasada como argumento
    }

    // Función nominativa para sumar
    function sumar(x, y) {
      return x + y;
    }

    // Función nominativa para multiplicar
    function multiplicar(x, y) {
      return x * y;
    }

    // Usamos las funciones nominativas dentro de otra función
    console.log(operacionMatematica(5, 3, sumar));       // 8
    console.log(operacionMatematica(5, 3, multiplicar)); // 15


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

    const persona = new Persona("Agatha");
    // console.log(persona.saludar()); 
    // Salida: Hola, soy Agatha


//ANÓNIMAS Ejemplo: 2
document.querySelector('button')
.addEventListener('click', function () {
  alert('¡Botón clickeado!');
});            
