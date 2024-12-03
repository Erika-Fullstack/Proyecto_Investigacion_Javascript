
        //Ejemplos variables y const//

//Ejemplo Symbol: Declaramos una variable Symbol 
 let uniqueId = symbol ("id")
 let hiddenKey = Symbol("hidden")
         
           
 // Llamamos a la variable
 console.log(uniqueId); //salida: Symbol(id)
 console.log(hiddenkey); //salida: Symbol(hidden)


// Ejemplo null. Declaramos una variable NUll 
let selectedProduct = null;
            
              
// Llamamos a la variable
console.log(selectedProduct); // salida: null


// Ejemplo Undefined.Declaramos una variable  Undefined
let name;
                
                  
// Llamamos a la variable
console.log (name); //salida undefined


//Ejemplo string. Declaramos una variable String
let userName = "Carla Siles"
            
              
// Llamamos a la variable
console.log(userName); // salida: "Carla Siles"   


// Ejemplo Function. Declaramos una variable Function
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
 console.log(height); //slaida: 1.60

 
 // Ejemplo array.Declaramos una variable Array
 let lenguajes = ["HTML","CSS","JavaScript"];
            
              
 // Llamamos a la variable
 console.log(lenguajes); // salida: ["HTML","CSS","JavaScript"];


 // Ejemplo Boolean. Declaramos una variable Booleano
 let isStudent = true
 let isTeacher = false;
           
 // Llamamos a la variable
 console.log (isStudent); //salida: true
 console.log (isTeacher); //salida: false


 // Ejemplo Object.Declaramos una variable Object
 let myCv = {
profession :"full-Stack Developer",
year :"2025"
 };
                 
// Llamamos a la variable
console.log(myCv); // salida: { profession:"full-stack Developer",year: "2025"}

Ejemplo BigInt
// Declaramos una variable BigInt
let PlanB = BigInt (2000000000000000)
            
              
// Llamamos a la variable
console.log(planB); //salida:2000000000000000n

 // Declaramos una variable BigInt
 let PlanB = BigInt (200000000)
                
              
// Ejemplo date.Llamamos a la variable
let today = new Date ();

// Llamamos a la variable 
console.log ("Fecha actual:",today)// salida: 04/12/2024


// Ejemplo set. Creamos un Set
let mySet = new Set ();

//Agregar algunos valores al Set
mySet.add (1)
mySet.add (2)
mySet.add (3)

       
// Llamamos a la variable 
console.log (mySet); //salida: Set { 1, 2, 3}
 

// Ejemplo map.Creamos un Map vacío:
let mySet = new Map ();

//Agregamos elementos al Map. Usamos método .set (clave,valor) para agregar pares de clave-valor al Map
myMap.set ("userName","Carla Siles")
mySet.set ("age",29);
mySet.set ("profession", "Full-stack developer");

       
// Llamamos a la variable. Usamos .get (clave) para obtener el valor asociado con la clave especifica.
console.log (myMap.get ("useName")); //salida: Carla Siles


//Ejemplo ReExp. Creamos una expresión regular para buscar palabras
 let regex= "hello;"

//Usamos la expresión regular 
 let text= "Hello, world!";

// BUscamos coincidencias
 let result = text.match (regex)
       
// Llamamos a la variable
 console.log (result) // salida: ["hello"]
            