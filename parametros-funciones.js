/* Parámetros básicos */
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

/* Parámetros predeterminados */
function saludar(nombre = "Amigo") {
    console.log(`¡Hola, ${nombre}!`);
}

/* Parámetros rest */
function sumar(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

/* Valores de retorno */
function obtenerAreaRectangulo(base, altura) {
    return base * altura; // Devuelve el área
  }

  let area = obtenerAreaRectangulo(5, 3);


  /* Funciones flecha con parámetros */
  const multiplicar = (a, b) => a * b;

/* Función flecha con rest y retorno implícito */
const sumarNumeros = (...numeros) => numeros.reduce((acum, num) => acum + num, 0);

/* Errores al acceder a parámetros fuera de la función */
function mostrarMensaje(mensaje) {
    console.log(mensaje);
}

mostrarMensaje("¡Hola!");