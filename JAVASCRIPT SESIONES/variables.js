// Comentarios de una sola línea

/** Comentario de múltiples líneas
 * 
 * wello
 */


//---------------------------------------------------------
/**Variables dentro de JS
 * Se entiende como una variable a un almacén de información que YO puedo 
 * declarar dentro de mi código JS.
 * 
 * Puedo almacenar información de diferentes maneras dentro de una variable:
 * 
 * Haciendo uos de los tipos de dato primitivos/complejos:
 * 
 *      +number
 *      +string
 *      +boolean
 *      +null
 *      +array
 *      +object
 * 
 * -ALMACENAR EL VALOR DE UN ELEMENTO DE HTML
 * -TRAER LA INFORMACIÓN DE UNA API Y ALMACENARLA DENTRO DE UNA VARIABLE
 * 
 * Cómo se declara una variable dentro de JS
 * 
 * Pasos:
 *      1. Palabras reservada 'let' o 'var'
 *      2. Darle un nombre a mi variable
 *      3. Colocamos operador de asignación '='
 *      4. Le damos un valor a nuestra variable
 * //** */

 //1. Variables que almacene datos númericos
 let edadFer = -23;
 let estaturaMiguel = 1.68;
 let pesoCarmen = 60;

 console.log(estaturaMiguel);

 /**
  * Type of
  * 
  * Es una función previamente definida en JS que nos permite evaluar el 
  * tipo de datos que almacena una variable dentro de nuestro códigp
  * 
  *     Sintaxis
  * 
  *         -typeof(variable)
  */

 console.log(typeof(edadFer));

 /**
  * Operadores aritmétricos
  * 
  * Un operador aritmético me permite utilizar varoles nímericos y realizar
  * distintos tipos de operaciones con los mismos. 
  * 
  * Operadores aritméticos disponibles en JS:
  * 
  * Suma (+)
  * Resta (-)
  * Multiplicación (/)
  * Exponenciación (**)
  * Módulo/Resiudo(%)
  * Incremento (++)
  * Decremento (--) 
  * 
  * 
  * '¿Como Puedo utilizar los varoles númericps de una variable para realizar 
  * operaciones aritmeticas?
  * 
  * FORMA 1: DECLARAR UNA NUEVA VARIABLE Y QUE ESTA ALMACENE LA SUMA DE 
  * DICHAS VARIBALES
  * 
  * FORMA2: Colocar una instrucción de depurado (console.log()) y dentro de sis 
  * parentesis colocar la suma de dichas variables.
  */

 //------------FORMA 1

 let sumaDeValores = edadFer + pesoCarmen;
 console.log(sumaDeValores);

 //---------FORMA 2

 console.log(edadFer + estaturaMiguel); //Suma
 console.log(3 - edadFer); //Resta
 console.log(4 * 4); //Multiplicación
 console.log(5/2); //División
 console.log(5%2); //Residuo
 console.log(2**4); //Potencia
 console.log(++pesoCarmen); // Incremento
 console.log(--pesoCarmen); // Decremento

 console.log(Math.sqrt(64)); //Raíz cuadrada

 //------------ EJERCICIO DE PRACTICA

 let numeroUno = 1;
 let numeroDos = 2;
 let numeroTres = 3;
 let numeroCuatro = 4;
 let numeroCinco = 5;
 let numeroSeis = 6;
 let numeroSiete = 7;
 let numeroOcho = 8;
 let numeroNueve = 9;
 let numeroDiez= 10;

 console.log(numeroUno + numeroCinco)
 console.log(numeroDiez + numeroCuatro)

 console.log(numeroSiete - numeroOcho)
 console.log(numeroTres - numeroNueve)

 console.log(numeroDos * numeroSiete)
 console.log(numeroUno * numeroCinco)

 console.log(numeroCinco / 2);
 console.log(numeroDiez / 8);

 //2. Variables que almacenan cadenas de texto (string)

 let videojuegoFavorito = "SmashBros";
 let nombreUsuario = "@juanin2"
 let CURP = `XXXXX
 XXXX
 XXXXXXXX`;

 console.log(typeof(CURP));
 console.log(videojuegoFavorito);
 console.log(CURP);

 
 /*
 CONCATENACIÓN de strings

 Podemos utilizar el operador ¨+¨ para unir dos o m¿as cadenas de texto
 */
 console.log(videojuegoFavorito + nombreUsuario);

 //----------------Agregando espacios con " " +
 console.log("Mi videojuego favorito es:" + videojuegoFavorito + " " + "y mi nombre de usuario es" + nombreUsuario)
 
//--------------Agregando espacios en string
 console.log("Mi videojuego favorito es:" + videojuegoFavorito  + " y mi nombre de usuario es " +  nombreUsuario)

 /**Backticks y literales de String
  * 
  * Las backtics son un tipo de comillas representadas
  *  por el caracter: `` (AltGr + })
  * 
  * Podemos hacer diferentes cosas con ellas con respecto a usar
  * comillas sencillas ('') o dobles ("").
  * 
  * ¿Puedo declarar Strings que utilizanee backtics?
  * SI, y se obtienen resultados diferentes, por ejemplo:
  * 
  *     -Podemos tener un string con diferentes saltos de línea, siendo 
  *     diferente a las comillas dobles donde no es posible. 
  * 
  *     Una forma más sencilla y legible de escribir mensajes o concatenar cadenas de
  * texto es haciendo uso de los literales de string. Los elementos que se incluyen son los
  * siguientes:
  * 
  *         -Backticks: para mostrar una cadema de texto
  *         -${variable}: para traer y mostrar el valor de una varaible
  */

 //Ejemplo de literal de String

 console.log(`La suma de ${estaturaMiguel} y ${pesoCarmen} es igual a: ${sumaDeValores}`)

 /*Métodos sencillos para cadenas de texto
 
 Un método es una funcionalidad previamente definida dentro del lenguaje de 
 programación que me permite hacer algo con cierta información que se encuentre 
 almacenada dentro de mi programa.

 Para cadenas de texto se utilizan de manera muy común los siguientes métodos:

    -toLowerCase(): convierte los caracteres de una cadena de texto en minúsculas
    -toUpperCase(): convierte los caracteres de una cadena de texto en mayúsculas.
 
    Sirven para validar cadenas de texto.
 */
//-----lowerCase 

console.log(CURP.toLowerCase());

//------UpperCase

console.log(nombreUsuario.toUpperCase());


//3. EJEMPLOS DE VARIABLES LOGICAS (boolenas/boolean)

/*
Un valor booleano solo puede ser:

    -True
    -False

Normalmente, encontramos este tipo de dato para realizar evaluaciones de tipo lógicas, donde,
según un resultado sea verdadero o falso se lleve a cabo la ejecución de ciertas instrucciones
dentro de mi código.
*/

let esHumano = true;
let usuarioVerificado = false;
let mayorDeEdad = true;

console.log(esHumano);

/*
Operadores para evaluar con valores lógicos

    1. Operadores lógicos: nos sirven para determinar resultados booleanos que sean verdaderos o falsos,
    según el operador que se utilice. Los operadores lógicos con los que contamos son:

        -AND (&&)
             Evalúa
              -Si a y b son verdaderos, el resultado es verdadero
              -Si a es verdadero y b es falso, el resultado es falso
              -Su a es falso y b es verdadero, el resultado es falso
              -Si a es falso y b es falso, el resultado es falso 

        -OR (||)
            Evalúa
              -Si a ó b son verdaderos, el resultado es verdadero
              -Si a es verdadero ó b es falso, el resultado es verdadero
              -Su a es falso ó b es verdadero, el resultado es verdadero
              -Si a es falso ó b es falso, el resultado es falso 
        
      -NOT (!): cambia el valor de un resultado booleano
            !(true): false
            !(false): true


2. Operadores de comparación

 */

let a = true;
let b = false;

console.log(a&&b);
console.log(a||b);
console.log(!a);
console.log(!b);
console.log(typeof(a));

//--- Ejemplos de variables que almacenan arreglos

let vocalistas = ["Matt Belamy", "Alex Turner", "Hayley Williams", "Sabrina Carpenter", "Olivia Rodrigo"];

let numerosPares = [0, 2, 4, 6, 8, 10];

let diosesGriegos = ["Zeus", "Afrodita", "Ares", "Hades", "Hermes"];

console.log(vocalistas); //--- Imprime el arreglo completo
console.log(vocalistas[4]); //--- Imprime un elemento en específico

console.log(numerosPares); 
console.log(numerosPares[4]);

//5. Ejemplos de variables que almacenan objetos

let mueble = {
    altura: 1.5,
    ancho: 0.5,
    tieneCajones: true,
    peso: 15,
    material: "Madera",
    color: "Beige",
    precio: "5000",
}

let cancion = {
    nombre: "The Unforgiven",
    artista: "Metalica",
    genero: "Heavy Metal",
    duracion: 5,
    año: 1996,
    album: "Black album",
    productora: "Blackenend records"
}

console.log(cancion); //----Muestra en pantalla el objeto completo
console.log(cancion.artista);

//---Constantes
/*
No unicamente podemos trabajar con valores variables, podemos igualmente definir
valores constantes que no puedan modificar su valor después de su declaración inicial.

Los pasos para declarar un valor constante son los mismos para las variables, 
con la diferencia de que tenemos que utilizar una palabra reservada diferente:

    -const

Recomendaciones!!
    En lugar de usar la convención de escritura camelCase, es mejor, utilizar
    UPPER_SNAKE_CASE
*/
//----Reasignación de variables
let miNombre = "Sofi";
console.log(`Nombre origina: $(miNombre)`);
miNombre = "Sofía"
console.log(`Nombre modificado: $(miNombre)`);

//---- Constante (no se pueden modificar, no aplica la reasignación de variables)
const API_ULR = "http://www.ejemplo.com"
console.log(`Valor original: $(API_URL)`);
// API_ULR = "URL diferente"

const NUMERO_PI = 3.141592;
console.log(`Valor original: $(NUMERO_PI)`)

//-----------------------------------------------------

//Comportamiento de una variable

/*
Scope (alcance)

Se refiere a que una variable puede ser accedida únicamente desde ciertas partes de mi código

Tipos de scope/alcance:

        -local: a partir de donde fue definida o dentro del bloque de mi código 
        donde se encuentre.
        -global: se puede acceder desde cualquier parte de mi código

    Diferencias entre let y var:
        let: tiene un scope local
*/

let verificarScope = "Si se puede acceder";
console.log(verificarScope); 

function miFuncion(){
    let nombre = "Pedrito"
    var apellido = "Sola"
    console.log(nombre);
    console.log(apellido);
}

console.log(nombre);
console.log(apellido);

/*
Hoisting

Es la manera en que JavaSrcipt interpreta la declaración de variables. Las variables
definidas con la palabra reservada 'var' adquieren este comportamiento, que es algo 
parecido a lo siguiente:

En la interpretación de un código de tipo JavaScript, estas variables se 'elevan' y 
se leen al principio de mi interpretación. 

*/

/*
Encasillamiento

Se refiere a que yo puedo convertir un tipo de dato en otro diferente.

Se necesita para ello:
        -Un valor para convertir
        -Usar alguno de los constructores disponibles para cada tipo de dato:

        *Number()
        *String()
        *Boolena()
*/

let nuevoPrompt = prompt("Introduce un dato: "); //------Ejemplo de cómo funciona
let convertirPrompt = Number(nuevoPrompt);
console.log(typeof(convertirPrompt));

let numeroEspecial = 7;
console.log(typeof(numeroEspecial));
let cadenaNumerica = "1";
console.log(typeof(cadenaNumerica));
let esCierto = true;
console.log(typeof(esCierto));

let convertirNumero = Number(cadenaNumerica);
console.log(convertirNumero);
console.log(typeof(convertirNumero))

let convertirString = String(numeroEspecial);
console.log(convertirString);
console.log(typeof(convertirString));

let convertirBoolean = Boolean(numeroEspecial);
console.log(convertirBoolean);
console.log(typeof(convertirBoolean));