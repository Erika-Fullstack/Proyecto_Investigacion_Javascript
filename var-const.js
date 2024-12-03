// Ejemplos variables y const

// Declaramos una variable Undefined
let userName;

// Llamamos a la variable
console.log(userName); // salida: undefined

// Declaramos una variable Null
let selectedProduct = null;

// Llamamos a la variable
console.log(selectedProduct); // salida: null

// Declaramos el valor de la variable String
userName = "Carla Siles";

// Llamamos a la variable
console.log(userName); // salida: "Carla Siles"

// Declaramos una variable Function
let greet = function (name) {
    return `Hola, ${name}!`;
};

// Llamamos a la variable
console.log(greet("Carla")); // salida: "Hola, Carla!"

// Declaramos variables Number
let age = 29;
let height = 1.60;

// Llamamos a las variables
console.log(age); // salida: 29
console.log(height); // salida: 1.6

// Declaramos una variable Array
let lenguajes = ["HTML", "CSS", "JavaScript"];

// Llamamos a la variable
console.log(lenguajes); // salida: ["HTML", "CSS", "JavaScript"]

// Declaramos variables Boolean
let isStudent = true;
let isTeacher = false;

// Llamamos a las variables
console.log(isStudent); // salida: true
console.log(isTeacher); // salida: false

// Declaramos una variable Object
let myCv = {
    profession: "full-Stack Developer",
    year: "2025"
};

// Llamamos a la variable
console.log(myCv); // salida: { profession: "full-Stack Developer", year: "2025" }

// Declaramos una variable BigInt
let PlanB = BigInt(2000000000000000);

// Llamamos a la variable
console.log(PlanB); // salida: 2000000000000000n

// Creamos un objeto con propiedades privadas usando Symbol
const uniqueId = Symbol('uniqueId');
const hiddenKey = Symbol('hiddenKey');
let user = {
    name: "Carla",
    age: 29,
    [uniqueId]: "79111111", 
    [hiddenKey]: "hiddenData" 
};

// Llamamos a las propiedades privadas
console.log(user[uniqueId]); // salida: "79111111"
console.log(user[hiddenKey]); // salida: "hiddenData"

// Declaramos una variable Date
let today = new Date();

// Llamamos a la variable
console.log("Fecha actual:", today); // salida: fecha actual

// Creamos un Set
let mySet = new Set();

// Agregar valores al Set
mySet.add(1);
mySet.add(2);
mySet.add(3);

// Llamamos a la variable
console.log(mySet); // salida: Set { 1, 2, 3 }

// Creamos un Map
let myMap = new Map();

// Agregamos elementos al Map
myMap.set("userName", "Carla Siles");
myMap.set("age", 29);
myMap.set("profession", "Full-stack developer");

// Llamamos a las claves del Map
console.log(myMap.get("userName")); // salida: "Carla Siles"

// Creamos una expresión regular para buscar palabras
let regex = /hello/i;

// Usamos la expresión regular
let text = "Hello, world!";

// Buscamos coincidencias
let result = text.match(regex);

// Llamamos a la variable
console.log(result); // salida: ["Hello"]