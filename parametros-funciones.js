/* Parámetros básicos */
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

/* Parámetros predeterminados */
function saludar(nombre = "Amigo") {
    console.log(`¡Hola, ${nombre}!`);
}

/* Parámetros rest */
function listarFrutas(...frutas) {
    console.log("Frutas recibidas:");
    frutas.forEach((fruta) => console.log(fruta));
}

/* Valores de retorno */
function obtenerAreaRectangulo(base, altura) {
    return base * altura; // Devuelve el área
  }

  let area = obtenerAreaRectangulo(5, 3);

/* Funciones flecha con parámetros */
  const multiplicar = (a, b) => a * b;

/* Errores al acceder a parámetros fuera de la función */
function mostrarMensaje(mensaje) {
    console.log(mensaje);
}

//mostrarMensaje("¡Hola!");

function nombreFuncion(...rest) {
    
    // 'rest' es un array que contiene 
    // el resto de los argumentos
}