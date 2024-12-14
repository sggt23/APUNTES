//Arreglos y bucles 

/*
Son un tipo de datos dentro de JS que me permiten almacenar múltiples
datps dentro de una misma variable.

    Las características principales dentro de un arreglo son:
        -Longitud: representa el #total de elementos que existen dentro de nuestro arreglo

        -Índices: se refieren a la posición que ocupa un elemento en específico dentro de mi arreglo

¿Cómo puedo declarra un arreglo?

    1.Declarar el arreglo con sus elementos
    2.Construir un arreglo a partir de la clase Array
    3.Definir un arreglo vacío y agregar elementos a través del índice que
    específiquemos.

*/
//Arreglo 1
let colores = ["rojo", "azul", "verde", "amarrillo", "violeta"];
console.log((colores));

//Arreglo 2
let numerosPares = new Array(0,2, 4, 6, 8, 10);
console.log(numerosPares);

//Arreglo 3
let carros = [];
carros[0] = "Toyota";
carros[1] = "Honda";
carros[2] = "Ford";
carros[2] = "Nissan";
console.log(carros);

/*
MÉTODOS PARA ARREGLOS

¿Qué es un método?
Función para arreglos; definida previamente dentro del lenguaje
que me sirven para llevar a cabo diferentes acciones/operaciones con un arreglo

Lista de algunos métodos para arreglos que existen dentro de JS:
    .pop()
    .push()
    .unshift()
    .shift()
    .slice()
    .at()
    .sort()
    .reverse()
    .indexOf()
    .forEach()
    .map()
*/

// .pop(); elimina el último elemento 
colores.pop();
console.log(colores);

//.push(elemento); agrega un elemento nuevo a mi arreglo. Pero no lo agrega al arreglo original.
colores.push("cyan");
console.log(colores);

//.unshift(elemento); agrega un elemento al inicio del arreglo
colores.unshift("naranja");
console.log(colores);

//shift(); elimina el primer elemento del arreglo
colores.shift();
console.log(colores);

//.slice(índice/posición); regresa todos los elementos de mi arreglo a partir de la posición indicada dentro del paréntesis
console.log(colores.slice(2));

//at(índice/posición); regresa el elemento que se encuentre dentro de la posición indicada dentro del paréntesis. 
console.log(colores.at(0))

//.sort(); ordena los elementos de forma ascendente basándose en el código ASCII
colores.sort();
console.log(colores);

//.reverse();
colores.reverse();
console.log(colores);

//.indexOf(); devuelve la posición dado un elemento
console.log(colores.indexOf("amarillo"));


//-------------------Métodos iterativos
/*Con respecto a los métodos anteriores, tenemos otro tipo de métodos que nos permiten ejecutar funciones
más completas/complejas dentro de un arreglo.

Los siguientes métodos van a trabajar/realizar una acción en específico sobre todos y cada uno de los elementos que existen de mi arreglo.

    -.forEach(función anónima); para cada elemento dentro de mi arreglo, se ejecuta una instrucción.
    -.map(función  anónima); parecido al primero, pero aquí se genera un arreglo nuevo con las iteraciones llevadas a cabo

    Ejemplo de sintaxis para ambos métodos

    let arreglo = [e1, e2, e3, e4, e5];

    En función flecha
    arreglo.forEach(alias o apodo => Instrucciones que se llevan a cabo sobre todos los elementos de mi arreglo);

    -función tradicional (función anónima)
    arreglo.forEach(function(alias){Instrucciones que se llevan a cabo sobre todos los elementos de mi arreglo})

    .map();
    función flecha
    arreglo.map(alias => instrucciones que se llevan a cabo sobre todos los elementos de mi arreglo);

    función tradicional
    arreglo.map(function (alias){
    instrucciones que se llevan a cabo sobre los elementos de mi arreglo
    })
*/

//.forEach();
colores.forEach(color => console.log(color.toLocaleUpperCase()));


//.map();
let coloresMayusculas = colores.map(e => e.toUpperCase());
console.log(coloresMayusculas);

/////////////////////////////////////////////////////////////////////////////
/*
Bucles 

Un ciclo, bucle o iteración (son los mismo) se trata de una estructura de flujo
que trabaja de la siguiente manera:

Tiene un punto de inicio, sobre el cual comenzarán a ejecutarse las instrucciones
definidos dentro del bloque. La cantidad de veces que las instrucciones se van a repetir
depende de una condición (expresiones lógicas) que: mientras sean verdaderas, las instrucciones se
repiten. Cuando es falso, se detiene el proceso de ejecución.

¿Qué ciclos podemos usar el JS?

ciclo for: es una forma de definir un bucle dentro de JS, su estructura/sintaxis están definidas de
la siguiente manera:

    -Palabra reservada for
    -(inicio; condición; contador (cuantas veces ejecuto la instrucción para cumplir la condición))
    -Llaves que delimitan el bloque de instrucciones que llevará a cabo el bucle.


*/
//Ejemplo del uso del ciclo for
//Ciclo que imprima los números del 0 al 100

for(let i = 0; i<=100; i++){
    console.log(i);
}

//Ejemplo 2 del ciclo for
// Ciclo que imprima los números del 0 al 100, contando de 10 en 10
for(let n = 0; n<=100; n+=10){
    console.log(n);
}

//Ejemplo 3 del uso del ciclo for
//Ciclo que imprima los elementos de un arreglo
for(let i = 0; i<colores.length; i++){
    console.log(colores[i])
}

/*   While

Es otro tipo de bucle dentro de JS, es similar al bucle for, pero tienen una diferencia importante:

Mientras que el ciclo While tiene una sintaxis más flexible,
el bucle for tiene una estructura definida previamente.

Sintaxis:

    -palabra resevada while
    -(condición)
    -bloque donde se encuentran las instrucciones que ejecuta el ciclo


*/
//Ejemplo de bucle con while
let i = 0;
while(i<=100){
    console.log(i);
    i++;
}

/* Do while

Es lo mismo que un bucle while, pero esta estructura nos pmerite primero llevar a cabo
una instrucción y, posteriormente, evaluar la condición del ciclo.

Sintaxis:

    -palabra reservada Do
    -bloque de código con las instruccines que ejecuta el ciclo
    -palabra reservada while
    -(condición)

*/

do{
    console.log(i);
    i++;
}while(i<=100)