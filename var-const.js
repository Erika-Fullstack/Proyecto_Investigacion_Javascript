// Ejemplos variables y const

// Declaramos una variable Undefined
let userName;

// Declaramos una variable Null
let selectedProduct = null;


// Declaramos el valor de la variable String
userName = "Carla Siles";


// Declaramos una variable Function
let greet = function (name) {
    return `Hola, ${name}!`;
};

// Declaramos variables Number
let age = 29;
let height = 1.60;


// Declaramos una variable Array
let languages = ["HTML", "CSS", "JavaScript"];


// Declaramos variables Boolean
let isStudent = true;
let isTeacher = false;

// Declaramos una variable Object
let myCv = {
    profession: "full-Stack Developer",
    year: "2025"
};


// Declaramos una variable BigInt
let PlanB = BigInt(2000000000000000);


 // Creamos un objeto con propiedades privadas usando Symbol
 const userProfile = Symbol('userProfile');
 const userPassword = Symbol('userPassword');
 let user = {
     name: "Carla",
     age: 29,
     [userProfile]: "carlasiles1", 
     [userPassword]: "12345" };
 

// Declaramos una variable Date
let today = new Date();

// Llamamos a la variable

// Creamos un Set
let mySet = new Set();

// Agregar valores al Set
mySet.add(1);
mySet.add(2);
mySet.add(3);


// Creamos un Map
let myMap = new Map();

// Agregamos elementos al Map
myMap.set("userName", "Carla Siles");
myMap.set("age", 29);
myMap.set("profession", "Full-stack developer");


// Creamos una expresión regular para buscar palabras
let regex = /hello/i;

// Usamos la expresión regular
let text = "Hello, world!";

// Buscamos coincidencias
let result = text.match(regex);





