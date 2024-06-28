/* //1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de multiplicar (Los primeros 10 multiplos).

let numero = parseInt(prompt("Ingresa un numero y observa su tabla de multiplicar: "));

function tablaMultiplicar(){
    
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
      }
}

tablaMultiplicar() */

//2.Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.
/* 


// acumularNumeros
function acumularNumeros() {
    let suma = 0;
    let numero; 
    // Solicitar números al usuario hasta que ingrese 0
    do {
      numero = parseFloat(prompt("Ingrese un número (0 para terminar): "));
      // Sumar el número ingresado a la variable `suma`
      if (!isNaN(numero)) {
        suma += numero;
      }
    } while (numero !== 0);
    // Mostrar el total acumulado
    console.log("La suma total de los números ingresados es:", suma);
    return suma;
  }
  // Llamar a la función para iniciar el programa
  //acumularNumeros();
  let retorno = acumularNumeros();
  console.log("este es el retrono " + retorno) */


/* // 3.Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
// variable guardar un numero que este en el rango 1 - 100. La persona debera poder
// ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
// valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
// nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
// cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
// que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
// felicitaciones y decirle en cuantos intentos lo ha realizado. 


function adivinarNumero() {
    // Generar un número aleatorio entre 1 y 100
    const numeroSecreto = retorno;
    
    //Math.floor(Math.random() * 100) + 1;
    // Variables para controlar los intentos y el resultado
    let intentos = 0;
    let adivinado = false;
  
    // Bucle principal del juego
    while (!adivinado) {
      intentos++;
  
      // Solicitar un número al usuario
      let numeroIngresado = parseInt(prompt("Ingrese un número para adivinar el numero secreto "));
  
      // Validar la entrada del usuario
      if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        alert("Error: Debe ingresar un número entre 1 y 100.");
        continue;
      }
  
      // Comparar el número ingresado con el número secreto
      if (numeroIngresado === numeroSecreto) {
        adivinado = true;
      } else if (numeroIngresado < numeroSecreto) {
        console.log("El número ingresado es menor que el número secreto.");
      } else {
        console.log("El número ingresado es mayor que el número secreto.");
      }
    }
  
    // Mostrar mensaje de felicitaciones y el número de intentos
    console.log("¡Felicitaciones! Adivinaste el número en " + intentos + " intentos.");
  }
  // Llamar a la función para iniciar el juego
  adivinarNumero(); */

/* //4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
// si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
// Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
// como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
// numero ya no es primo.

let numero = parseInt(prompt("ingresa un numero para saber si es primo: "))

function esPrimo(numero) {

  // Dividir el número por cada número desde 2 hasta la mitad del mismo
  for (let divisor = 2; divisor <= numero / 2; divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }

  // Si no se encontró ningún divisor, el número es primo
  return true;
}

// Ejemplo de uso
const numeroAComprobar = numero;

if (esPrimo(numeroAComprobar)) {
  console.log(`${numeroAComprobar} es un número primo`);
} else {
  console.log(`${numeroAComprobar} no es un número primo`);
} */


/* //5.Realizar un programa que permita dado un numero, mostrar todos sus divisores.


let numero = parseInt(prompt("ingresar numero : "))

function mostrarDivisores(numero) {
  // Validar si el número es un entero positivo mayor que 0
  if (typeof numero !== 'number' || numero <= 0) {
    return false;
  }

  // Crear un array para almacenar los divisores
  const divisores = [];

  // Dividir el número por cada número desde 1 hasta el propio número
  for (let divisor = 1; divisor <= numero; divisor++) {
    if (numero % divisor === 0) {
      divisores.push(divisor);
    }
  }

  // Mostrar los divisores en la consola
  console.log("los divisores de " + numero + " son " + divisores.join('-'));
}

mostrarDivisores(numero) */

/* //6.Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por consola con cada uno de los elementos del array.


const frutas = ["manzana", "naranja", "plátano", "pera", "uva", "kiwi", "fresa", "frambuesa", "melón", "sandía"];

// Recorrer el array con un bucle for
for (let i = 0; i < frutas.length; i++) {
  console.log( frutas[i])
} */

/* //7.Dado un array de 10 numeros, realizar un programa que muestre por consola el doble de cada uno de los elementos.

const numeros = [1, 2, 3, 4, 5, 6, 17, 28, 9, 10]; // Array de 10 números

// Recorrer el array y mostrar el doble de cada elemento
for (let i = 0; i < numeros.length; i++) {
  const doble = numeros[i] * 2;
  console.log("El doble de " + numeros[i] + " es : " + doble);
} */

/* //8.Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentacion por cada elemento del array.


const grupoFamiliar = [
  { nombre: "Ferney", apellido: "Vargas", edad: 54, parentesco: "Padre" },
  { nombre: "Rosa", apellido: "Alvarez", edad: 45, parentesco: "Madre" },
  { nombre: "Joan", apellido: "Vargas", edad: 27, parentesco: "Hijo Mayor" },
  { nombre: "Nora", apellido: "Vargas", edad: 25, parentesco: "Hija Favorita" },
  { nombre: "Abuela Elsy", apellido: "cañas", edad: 78, parentesco: "Abuela materna" }
];

// Recorrer el array con un bucle for
for (let i = 0; i < grupoFamiliar.length; i++) {
    console.log("Me llamo " + grupoFamiliar[i].nombre + " " + grupoFamiliar[i].apellido + " tengo " + grupoFamiliar[i].edad + " años y soy " + grupoFamiliar[i].parentesco )
} */


/* //9.Dado un array de 10 numeros, realizar un programa que recorra el array y solo muestre los numeros impares.
const impares = [1, 5, 9, 2, 6, 8, 4, 7, 10, 3]; // Array de 10 números

// Recorrer el array y mostrar solo los números impares
for (let i = 0; i < impares.length; i++) {
  if (impares[i] % 2 !== 0) {
    console.log(`Número impar: ${impares[i]}`);
  }
} */

/* // 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0.

let sumaPares = 0;
let sumaImpares = 0;

let numerosPares = [];
let numerosImpares = [];

let suma_numero;

do {
  suma_numero = parseInt(prompt("Ingrese un número (0 para finalizar): "));

  if (suma_numero !== 0) {
    if (suma_numero % 2 === 0) {
      sumaPares += suma_numero;
      numerosPares.push(suma_numero);
    } else {
      sumaImpares += suma_numero;
      numerosImpares.push(suma_numero);
    }
  }
} while (suma_numero !== 0);

console.log("suma de numeros pares " + sumaPares)
console.log("Lista de numeros pares " + numerosPares)// Mostrar el array de pares
console.log("suma de numeros impares " + sumaImpares)
console.log("Lista de numeros pares " + numerosImpares) // Mostrar el array de impares */

/* //11.Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas grande

// Array de 10 números
const numeros = [10, 5, 2, 4, 10, 6, 3, 9, 8, 7]; 

// Inicializar con el primer elemento
let numeroMayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeroMayor) {
    numeroMayor = numeros[i];
  }
}
console.log("El número más grande es: " + numeroMayor); */

/* //12.Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas chico.


// Array de 10 números
const numeros = [10, 4, 102, 4, 56, 6, 3, 9, 8, 7]; 

// Inicializar con el primer elemento
let numeroMenor = numeros[0]; 

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < numeroMenor) {
    numeroMenor = numeros[i];
  }
}

console.log("El número más pequeño es:" + numeroMenor); */


//13.Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo un empate. Caso contrario mostrar un mensaje con el nombre de la persona ganadora.

let nombreJugador1 = prompt("ingresa el  ombre del jugador 1: ");
let nombreJugador2 = prompt("ingresa el  ombre del jugador 2: ");
let ganador = false;

while (ganador == false) {
    let jugador1 = parseInt(prompt("Ingrese la opción del jugador 1 (piedra, papel o tijera) ingresando la opción en número"));
    let jugador2 = parseInt(prompt("Ingrese la opción del jugador 2 (piedra, papel o tijera) ingresando la opción en número"));

    if ((jugador1 == 1 && jugador2 == 3) || (jugador1 == 2 && jugador2 == 1) || (jugador1 == 3 && jugador2 == 2)) {
        ganador = true;
        console.log("¡Felicidades! Ganó " + nombreJugador1);
    } else if ((jugador2 == 1 && jugador1 == 3) || (jugador2 == 2 && jugador1 == 1) || (jugador2 == 3 && jugador1 == 2)) {
        ganador = true;
        console.log("¡Felicidades! Ganó " + nombreJugador2);
    } else {
        console.log("Empate, los jugadores vuelven a intentarlo");
    }
}



/* //14.Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.

function crearFilaAsteriscos(lado) {
  let fila = "";
  for (let i = 0; i < lado; i++) {
    fila += "* ";
  }
  return fila;
}

// Imprimir el triángulo de x asteriscos
// Cantidad de asteriscos en la base del triángulo
const lado = parseInt(prompt("ingresa la cantidad de asteriscos a imprimir: ")); 

for (let i = 1; i <= lado; i++) {
  console.log(crearFilaAsteriscos(i));
}


let asterisco = "* ";

for (i = 0; i < 5; i++){
  console.log(asterisco);
  asterisco = asterisco + "* "
} */


/*   //15.Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado pero invertido.


  let asteriscosInvertido = "* * * * *"

  for(i = 5; i >= 1; i--){
    console.log(asteriscosInvertido);
    asteriscosInvertido = asteriscosInvertido.substring(0, asteriscosInvertido.length -2)
  } */


/* //16.Dado un array de 10 numeros desordenados, realizar un programa que imprima porpantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)


const numeros = [5, 2, 4, 1, 6, 3, 9, 8, 7, 10]; // Array de 10 números desordenados

// Función para ordenar el array
function ordenarArray(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < (numeros.length - i - 1); j++) {
      if (numeros[j] > numeros[j + 1]) {
        // Intercambiar elementos si están en el orden incorrecto
        [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
      }
    }
  }
}

// Ordenar el array
ordenarArray(numeros);

// Imprimir el array ordenado
console.log("Array ordenado:");
console.log(numeros); */

