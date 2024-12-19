// JS-02- FUNCIONES

/*
Funciones 

Una función dentro de la programación es una estructura que me permite
llevar a cabo una serie de pasos que resuelve una tarea determinada

Pasos para declarar una función:
        1.Palabra reservada -function
        2.Darle un nombre
        3.Agregar los paréntesis para los parámetros de la función
        4.LLaves que indican donde inicia y donde termina la función {}
         */


//Declarar nuestra primera función en JS

//Función para mostrar un mensaje en la consola

/*La función declarada debajp de este comentario tiene las siguientes características:
        -No recibe parámetros
        -No devuelve ningún valor

*/

function mostrarMensaje(){
    console.log("Hola Mundo");
}

mostrarMensaje();

//Función para saludar a un usuario saludarUsuario
/*
Sus caracteristicas de esta función son:
        1.Recibe un parámetro 'nombreUsuario'
        2.No devuelve ningún valor
*/

function saludarUsuario(nombreUsuario){
    console.log(`Hola, ${nombreUsuario}, que tengas un gran día :D`)
}

saludarUsuario("Sofía");
saludarUsuario("Luis");
saludarUsuario("Elizabeth");

//Función para calcular el promedio de una calificación a partir de 4 resultados diferentes
/*
La función de abajo tiene las siguientes características:

    1.Recibe los parámetro a, b, c, d
    2. Si devuelve un valor 'promedio'

*/

function calcularPromedio(a, b, c, d){
    let promedio = (a+b+c+d)/4
    return promedio;
}

//Formas de utilizar el valor devuelto por una función

//Ejemplo #1: almacenar el valor dentro de una variable
let partirPromedio = calcularPromedio(10,10,10,10)/2;
console.log(partirPromedio);

//Ejemplo #2: mostrar el valor devuelto por mi función en la consola
console.log(calcularPromedio(10, 8, 9, 10))
console.log(calcularPromedio(10, 10, 10, 10))

//Ejemplo #3: utilizar el valor para que sea evaluado bajo cierta condición
if(calcularPromedio(5, 5, 5, 5) >= 7){
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

//------Funciones flecha
/*
Son lo mismo que una función tradicional, con la gran diferencia de que su síntaxis es
más sencilla

¿Cómo se declara una función flecha?

    1. Palabra reservada var, let, const
    2. Asignarle un nombre
    3. Se coloca el signo de asignación '=' para agregar paramétros a mi función
    4. Agregar un fat arrow '=>' --esto funciona como las llaves, no siempre será necesario
    y posteriormente, 
    5. Se agregan las instrucciones a ejecutar

Condiciones:
        -Puedo evitar colocar los paréntesis de mis paramétros si recibo un solo paramétro
        -Puedo omitir coloar las llaves que encierran todas las instrucciones 
        que ejecutan mi función si solo existe una instrucción

        -La palabra reservada 'return' es implícita siempre y cuando solo exista una expresión 
        dentro de mi función

*/

//Función flecha que eleve un número al cuadrado

const elevarAlCuadrado = n => console.log(n**2);
console.log(elevarAlCuadrado(4));

const saludarUsuario2 = nombreUsuario =>`Hola, ${nombreUsuario}`
console.log(saludarUsuario2("Momo"));

let numerosPares = [0, 2, 4, 8, 10]

let duplicarCantidad = numerosPares.map(e => e*2);
console.log(duplicarCantidad);