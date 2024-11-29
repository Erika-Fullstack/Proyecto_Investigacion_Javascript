// Alert Function
function showAlert() {
    alert("¡Hola, este es un mensaje de alerta!");
  }

  // Prompt Function
  function getPrompt() {
    const userInput = prompt("¿Cual es tu nombre?", "Aleeza");
    if (userInput) {
      alert("Hola, " + userInput + "!");
    } else {
      alert("Hola, ${nombre}");
    }
  }

  // Confirm Function
  function getConfirm() {
    const userConfirmed = confirm("¿Estas seguro de continuar?");
    if (userConfirmed) {
      alert("Continuando...");
    } else {
      alert("Operacion cancelada");
    }
  }

  // Console Log Function
  function showConsoleLog() {
    console.log("Este es un mensaje en la consola.");
    console.log("You can check the browser's Developer Tools to see the output.");
     
    let numero = 42;
    console.log("El numero es:", numero);
  } 

  //Document Write Function
   function showDocumentwrite(){

    document.write("<h1>¡Hola, mundo!</h1>");
   }