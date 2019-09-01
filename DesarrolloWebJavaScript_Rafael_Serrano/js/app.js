window.onload = function () { //cargamos nuestra pantalla 
    pantalla = document.getElementById("display"); //elemento pantalla de salida
} //fin cargar

var x = "0"; //número en pantalla
var xi = 1; //iniciar número en pantalla: 1=si; 0=no;
var coma = 0; //estado coma decimal 0=no, 1=si;
var ni = 0; //número oculto o en espera.
var pi = 0; //operacion oculto o en espera.
var opcion = "no"; //operación en curso; "no" =  sin operación.
var temporal = ""; //operacion temporal
var solucion = ""; //solucion
var opAnterior = ""; //operacion anterior

var resultado = document.getElementById("display");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var cero = document.getElementById("0");
var suma = document.getElementById("mas");
var resta = document.getElementById("menos");
var multiplicacion = document.getElementById("por");
var division = document.getElementById("dividido");
var igual = document.getElementById("igual");
var reset = document.getElementById("on");
var cambiarsigno = document.getElementById("sign");
var raiz = document.getElementById("raiz");
var punto = document.getElementById("punto");
var tecla = document.getElementsByClassName("tecla");

for (var i = 0; i < tecla.length; i++) { //recorro todas las teclas y agregamos el escalado cuando se de click individualmente e.target (Una referencia a un objeto que lanzo el evento)
    tecla[i].onmousedown = function (e) {
        e.target.style.transform = "scale(0.9,0.9)";
    } //fin mouse down
    tecla[i].onmouseup = function (e) {
        e.target.style.transform = "scale(1,1)";
    } //fin mouse up
} //fin recorrido tecla

//presiona el numero 1
uno.onclick = function (e) {
    numero("1");
} //fin click

//presiona el numero 2
dos.onclick = function (e) {
    numero("2");
} //fin click

//presiona el numero 3
tres.onclick = function (e) {
    numero("3");
} //fin click

//presiona el numero 4
cuatro.onclick = function (e) {
    numero("4");
} //fin click

//presiona el numero 5
cinco.onclick = function (e) {
    numero("5");
} //fin click

//presiona el numero 6
seis.onclick = function (e) {
    numero("6");
} //fin click

//presiona el numero 7
siete.onclick = function (e) {
    numero("7");
} //fin click

//presiona el numero 8
ocho.onclick = function (e) {
    numero("8");
} //fin click

//presiona el numero 9
nueve.onclick = function (e) {
    numero("9");
} //fin click

//presiona el numero 0
cero.onclick = function (e) {
    numero("0");
} //fin click

//cambiar signo + / -
cambiarsigno.onclick = function (e) {
    opuest();
} //fin click

//punto decimal
punto.onclick = function (e) {
    numero(".");
} //fin click

//operacion suma
suma.onclick = function (e) {
    operar("+");
} //fin click

//operacion resta
resta.onclick = function (e) {
    operar("-");
} //fin click

//operacion multiplicacion
multiplicacion.onclick = function (e) {
    operar("*");
} //fin click

//operacion division
division.onclick = function (e) {
    operar("/");
} //fin click

//raiz cuadrada
raiz.onclick = function (e) {
    raizc();
} //fin click

//igualar
igual.onclick = function (e) {
    igualar();
} //fin click

//limpiar pantalla
reset.onclick = function (e) {
    borradoTotal();
} //fin click


//mostrar número en pantalla según se va escribiendo:
function numero(xx) {
    if (x == "0" || xi == 1 || x == "") { // si numero en pantalla es 0 o esta vacio o esta iniciando un numero en pantalla
        pantalla.innerHTML = xx; //sobreescribimos el 0 o el numero que esta en pantalla por el valor inicial
        x = xx; //reescribo el valor de pantalla
        if (xx == ".") { //si escribimos una coma al principio del número
            pantalla.innerHTML = "0."; //escribimos 0.
            x = xx; //guardar número
            coma = 1; //cambiar estado de la coma
        }
    } else { //continuar escribiendo un número
        if (xx == "." && coma == 0) { //si escribimos una coma decimal pòr primera vez
            pantalla.innerHTML += xx; //escribo en pantalla el valor concatenado al valor concatenado
            x += xx; //anexo el valor a mi pantalla
            coma = 1; //cambiar el estado de la coma  
        }
        //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
        else if (xx == "." && coma == 1) {} //de forma inversa no funciona
        //Resto de casos: escribir un número del 0 al 9: 	 
        else if (resultado.firstChild.length <= 7) { //si la cantidad de letras son menor que 8
            pantalla.innerHTML += xx; //concateno el valor a mi pantalla
            x += xx; //concateno valor
        }
    }
    xi = 0 //el número está iniciado y podemos ampliarlo.
} //fin numero

function operar(s) {
    //igualar(); //si hay operaciones pendientes se realizan primero
    ni = x; //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
    opcion = s; //guardamos tipo de operación.
    opAnterior = s; //operacion anterior igual a operacion actual
    xi = 1; //inicializar pantalla.
    coma = 0; //cambiar estado de la coma
    pantalla.innerHTML = ""; //limpia pantalla
    temporal += x + s; //concateno valor mas el operador
    if (pi == 1) { //si ya di igual
        temporal = x + s; //concateno el valor con el operando
    } //fin if
} //fin operar

function igualar() {
    if (opcion == "no") { //no hay ninguna operación pendiente.
        x = x.substring(0, 7);
        pantalla.innerHTML = x; //mostramos el mismo número	
        temporal = x; //asigno el valor a el temporal

        if (pi == 1) { //si ya di igual
            sl = solucion + opAnterior + ni; //creo una operacion concatenando los valores
            solucion = eval(sl); //convertimos la cadena a código y resolvemos con la evaluacion
            solucion = solucion.toString(); //convierto la solucion a cadena
            solucion = solucion.substring(0, 8); //obligo que mi solucion tenga 
            pantalla.innerHTML = solucion; //escribo mi solucion en pantalla
        }
    } else { //con operación pendiente resolvemos
        sl = temporal + x; // escribimos la operación en una cadena
        ni = x; //guardado
        temporal += x; //guardo en el temporal
        solucion = eval(sl); //convertimos la cadena a código y resolvemos
        solucion = solucion.toString(); //solucion a cadena
        solucion = solucion.substring(0, 8); //limito solucion a 8 digitos
        pantalla.innerHTML = solucion; //mostramos la solución
        x = solucion; //guardamos la solución
        opcion = "no"; //ya no hay operaciones pendientes
        xi = 1; //se puede reiniciar la pantalla.
        temporal = x; //valor a temporal
        pi = 1; //ya se dio igual
        document.getElementById("myTextarea").value = temp;
    }
} //fin operar

function raizc() {
    x = Math.sqrt(x); //resolver raíz cuadrada.
    x = x.toString(); //convierto la solucion a cadena
    x = x.substring(0, 8); //obligo que mi solucion tenga 
    pantalla.innerHTML = x; //mostrar en pantalla resultado
    opcion = "no"; //quitar operaciones pendientes.
    xi = 1; //se puede reiniciar la pantalla 
} //fin raiz


function opuest() {
    nx = Number(x); //convertir en número
    nx = -nx; //cambiar de signo
    x = String(nx); //volver a convertir a cadena
    pantalla.innerHTML = x; //mostrar en pantalla.
} //fin opuesto

function borradoTotal() {
    pantalla.innerHTML = 0; //poner pantalla a 0
    x = "0"; //reiniciar número en pantalla
    coma = 0; //reiniciar estado coma decimal 
    ni = 0 //indicador de número oculto a 0;
    opcion = "no" //borrar operación en curso.
    temporal = ""; //limpio temporal
    opAnterior = ""; //reinicio operacion anterior
    pi = ""; //reinicio la cantidad de igual
} //fin borrar todo
