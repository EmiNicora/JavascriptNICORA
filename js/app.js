
// // let respuesta = String(MensajeBienvenida)
/* let respuesta1 = "Claro que YEAH"
let respuesta2 = "Always"
console.log(`La respuesta es ${respuesta2} , no ${respuesta1}`)
let mensajerecibido = alert('Bienvenido al mundo mágico :)')

/*declaracion de variable
let declaracion;
//asignando valor
declaracion = "esto es una declaracion";

//reasignar valor 
declaracion = "aqui reasigno un valor a la variable"

//estas son dos variables con el mismo nombre, no se puede poner el mismo nombre en var, const ni let//
/*
var nombre= "Natalia"

let nombre= "Natalia"
*/

/*const nombre= "Natalia"
const nombre= "Natalia 2" */

/*
//strigs -> una cadena de texto (comillas dobles o simples)
/*
let nombre= "Natalia"
let numerostring= "2"
let apellido= "Machado"
//integer -> numeros sin comillas.()
let num = 3
let numero= 2


//typeof te muestra que tipo de dato es:
//console.log(typeof(numero))

//para sumar usamos console.log(numero + num)

//CONCATENAR es juntar mas de un tipo de string  "2" + 3 =23 - se usa + 
console.log("concatenacion:" + numerostring + num)

//parsear es convertir un tipo de dato para poder hacer el ejercicio necesito
console.log("concatenacion:" + (parseInt(numerostring) + num))


console.log(numerostring * num)
console.log(numerostring / num)

console.log(`${nombre} esto es un texto ${apellido}`)
*/

// let nombre = prompt('ingresa tu nombre')
// console.log(nombre)

/*let MensajeBienvenida = alert('Hola! Para ingresar al sitio, probá que no sos MUGGLE.')
let pregunta = prompt('After all this time?')
let mensajerecibido = alert('Bienvenido al mundo mágico :)')*/

let preguntaNombre = prompt ('Hola! Ingresá tu nombre')
let MensajeBienvenida = alert('Para entrar al sitio, probá que no sos MUGGLE.')
let pregunta = prompt('After all this time? Opciones: Always/Claro que YEAH')
let respuesta1 = "Claro que YEAH papito ;)"
let respuesta2 = "Always"

/*if (pregunta == respuesta2) {
    // let mensajerecibido = alert( preguntaNombre + " " + 'Bienvenido al mundo mágico :)')
    console.log(`${preguntaNombre} "Bienvenido al mundo mágico"`)
}*/
/*else {
    console.log("no estas autorizado para entrar a la página")
    let mensajerecibido = alert('no estas autorizado para entrar a la página')
}
-*/
if ((pregunta == "ALWAYS") || (pregunta == "always") )
{
    alert( preguntaNombre + " " + 'Bienvenido al mundo mágico :)');
    (console.log(`${preguntaNombre} "Bienvenido al mundo mágico"`))
}

    else{ alert ( preguntaNombre + " " + 'no estas autorizado para entrar a la página');
    (console.log(`${preguntaNombre} "no estas autorizado para entrar a la página :("`))
}
 