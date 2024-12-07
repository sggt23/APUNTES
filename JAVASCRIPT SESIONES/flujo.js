//Estructuras de control de flujo
/*
Estructuras de control

Son tipos de bloques dentro de los lenguajes de programación, muy importantes
y utilizados de manera frecuente dentro de cualquier programa.
Su finalidad es optimizar la manera en que se van ejecutando instrucciones
dentro de mi programa. 

Entre las ventajas de usarlas son:
        1. Definir el flujo que sigue el programa
        2. Trabajar bajo condiciones
        3. Optimizar el procesamiento de datos

las diferentes estructuras de control que existen en los lenguajes de programacion son:

     -If else
     -switch
     -for
     -do
     -do while

*/
//      if/esle
/*
Podemos entener un if/else de la siguiente manera:

Evaluaremos una condición. El resultado de dicha evaluación tendrá un valor
booleano: true o false.

Si mi condición se cumple, se ejecutarán determinadas instrucciones.

Si NO se cumple mi condición, se ejecutarán instrucciones diferentes.

La sintaxis de una estructura if/else es la siguiente:

            if(condición){
                //Instrucciones que se ejecutan si la condición se cumple

            }else{
                //Instrucciones que se ejecutan si la condición no se cumple
            }

Los condiciones se construyen a partir del uso de los siguientes operadores:

1. Operadores lógicos:
   -AND &&
   -OR ||
   -NOT !

2. Operadores de comparación:
    -Iugal que ==
    -Estrictamente igual que ===
    -Diferente que !=
    -Estrictamente diferente de !==
    -mayor que >
    -menor que <
    -mayor o igual que >=
    -menor o igual que <=


Ejemplos:

ej. 1
console.log(6 <= 8); // output: true

ej.2
let x =5;
x>6 // output: false

ej.3
(x < 3 && >=) // output: false

ej.4
(miFunción(x) >= 27) // output: false

*/
// let y = 3
if(30 == '30'){
    // console.log(`El valor de ${y} es igual que 30`)
    console.log(`Los números comparados son iguales`)
}else{
    // console.log(`El valor de ${y} no es igual que 30`)
    console.log(`Los números comparados no son iguales`)
}

//-----------Ejercicios de practica

/*
if - else

Es la misma estructura if else que se encuentra definida arriba de este comentario,
solamente es una manera de anidar diferentes bloques if, con la intención de 
poder evaluar diferentes condiciones.

if(condición 1){
    //Instrucciones que se ejecutan si se cumple la condición 1
}else if(condición 2){
    //Instrucciones que se ejecutan si se cumple la condición 2
}else if(condición 3){
    //Instrucciones que se ejecutan si se cumple la condición 3
}else
    //Instrucciones que se ejecutan si ninguna de las condiciones
    anteriores

*/
let opcionInput = prompt("Por favor, ingrese una opción: ")
let opcion = 5;

// if(opcion === 1){
//     console.log(`Operacion realizada: #${opcion} retiro de dinero`);
// }else if(opcion === 2){
//     console.log(`Operacion realizada: #${opcion} transferencia`)
// }else if


/*

Switch

Es otra estructura de control parecida a if else, principalmente, porque nos
permite evaluar diferentes condiciones, que en este caso los llamamos 'Casos' (case).

Otra de las diferenecias importantes es que no utiliza expresiones lógicas/condicionales como
if else.

Sintaxis:

    palabras reservadas:
        -Switch: para definir la estructura 
        -case: para colocar un caso a evaluar
        -break: para indicar donde debe de terminar la ejecución de instrucciones
        -default: es un valor que me indica que no se encontraron coincidencias con 
        ninguno de los casos definidos.

        switch(parámetro){
            case 0:
                //Intruscciones que se llevan a cabo para el caso 0
        break;
        case 1:
                //
        break;
        case 2: 
                //
        break;
        case 3:

        }

*/
switch(opcion){
    case 1:
        console.log(`Operación realizada: #${opcion} retiro de dinero`);
    break;
    case 2:
        console.log(`Operación realizada: #${opcion} transferencia`)
    break;
    case 3: 
        console.log(`Operación realizada: #${opcion} depósito a cuenta`);
    case 4:
        console.log(`Operación realizada: #${opcion} pago de transferencia`);
    break;
    default:
        console.log(`Operación no identificada`);
}

/*
Ejemplo 2

Necesito crear un programa que me ayude a determinar si un número es divisible
entre 5 y 7. (ambas condiciones tienen que cumplirse, n debe ser divisible entre 5 y 7)

El programa devuleve verdadero si cumple sino devuelve falso
¿Cómo resolveríamos este problema?

Necesitamos determinar:

Determinando a través de una operación matemática si el número es divisible entre 5 y 7
Si un numero es divisible es entre 5 y 7, el residuo es 0 --> porque si es divisible

¿Cómo lo puedo determinar?
Obteniendo el residuo de dividir mi número entre 5 y 7. 
El resultado debe ser entero:

¿Qué estructura puedo utilizar para resolver este problema?
if else
Porque no cuento con casos específicos para evaluar. El número ingresado determina 
*/

let n = 45
if(n%5 === 0 && n%7 === 0){
    console.log(true);
}else {
    console.log(false);
}

/*
Es una manera más sencilla de expresar un bloque if-else dentro de una sola línea de código

Sintaxis
    - No utiliza ninguna palabra reservada.
    -Puedo almacenar un operador ternario dentro de una variable o puedo colocarlos directamente
    en una instrucción console.log();

    condición ? true:false;
Utilizamos el operador ternario para expresar condicionales que tengan una estructura muy simple,
esto nos ayuda a mejorar la legibilidad del código y nos ahorra muchas líneas dentro del mismo.

*/

/*
Ejemplo:

Determinar si una persona es mayor de edad a través de su edad

Si la persona tiene 18 años o más, sabemos que es mayor de edad
Si la persona tiene menos de 18 años, sabemos que es menor de edad

*/

// Bloque if else
let edad = 21
if(edad >= 18){
    console.log(`Según tu edad ${edad}, si eres mayor de edad`);
}else{
    console.log(`Según tu edad ${edad}, no eres mayor de edad`)
}

let evaluarEdad = edad >= 18 ? console.log(`Según tu edad ${edad}, si eres mayor de edad`): console.log(`Según tu edad ${edad}, no eres mayor de edad`)