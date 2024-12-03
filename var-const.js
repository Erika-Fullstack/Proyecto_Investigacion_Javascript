    //Ejemplos variables y const//

 // Declaramos una variable  Undefined
 let userName;
                
                  
 // Llamamos a la variable
 console.log (userName); //salida undefined

 // Declaramos una variable NUll 
 let selectedProduct = null;
          
            
 // Llamamos a la variable
 console.log(selectedProduct); // salida: null

 // Declaramos una variable String
 let userName = "Carla Siles"
            
              
 // Llamamos a la variable
 console.log(userName); // salida: "Carla Siles"  

 // Declaramos una variable Function
 let greet = function(name) {
    return `Hola, ${name}!`;
    };
                 
// Llamamos a la variable
console.log(greet("Carla")); //salida: "Hola,Carla!"


// Declaramos una variable Number
let age = 29;
let height = 1.60;
               
// Llamamos a la variable
console.log(age); //Salida:29
console.log(height); //salida: 1.6

// Declaramos una variable Array
let lenguajes = ["HTML","CSS","JavaScript"];
            
// Llamamos a la variable
console.log(lenguajes); // salida: ["HTML","CSS","JavaScript"];


// Declaramos una variable Booleano
let isStudent = true
let isTeacher = false;
          
// Llamamos a la variable
console.log (isStudent); //salida: true
console.log (isTeacher); //salida: false


// Declaramos una variable Object
let myCv = {
profession :"full-Stack Developer",
year :"2025"
}; 
              
// Llamamos a la variable
console.log(myCv); // salida:{ profession:"full-stack Developer",year: "2025"}


// Declaramos una variable BigInt
let PlanB = BigInt (2000000000000000)
              
// Llamamos a la variable
console.log(PlanB); //salida:2000000000000000n


 // Creamos un object con propiedades privadas usando Symbol. 
 let user = {
    name:"Carla",
    age:29,
    [uniqueId]: "79111111", // usamos Symbol como clave
    [hiddenKey]: "hiddenData" // otra propiedad (esconder)

  };
          
  // Llamamos a la variable
  console.log(user[uniqueId]); //salida: "79111111"
  console.log(user[hiddenKey]); //salida: "hiddenData"


  // Declaramos una variable Date
  let today = new Date ();
            
  // Llamamos a la variable 
  console.log ("Fecha actual:",today)// salida: 04.12.2024

  // Creamos un Set
  let mySet = new Set ();

  //Agregar algunos valores al Set
  mySet.add (1)
  mySet.add (2)
  mySet.add (3)
        
  // Llamamos a la variable 
  console.log (mySet); //salida: Set { 1, 2, 3}
  

   // Creamos un Map vacío:
   let myMap = new Map ();

   //Agregamos elementos al Map. Usamos método .set (clave,valor) para agregar pares de clave-valor al Map
   myMap.set ("userName","Carla Siles")
   myMap.set ("age",29);
   myMap.set ("profession", "Full-stack developer");

   // Llamamos a la variable. Usamos .get (clave) para obtener el valor asociado con la clave especifica.
   console.log (myMap.get ("userName")); //salida: Carla Siles


    // Creamos una expresión regular para buscar palabras
    let regex= /hello/i;

    //Usamos la expresión regular 
    let text = "Hello, world!";
 
    // BUscamos coincidencias
    let result = text.match(regex);
 
    // Llamamos a la variable
    console.log (result); // salida: ["hello"]