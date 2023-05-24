/*
let numeros = [];

let cantidad = parseInt(prompt('¿Cuántos números desea ordenar? '))

while(numeros.length < cantidad){
    let numero = parseInt(prompt('Digite un número '))
    numeros.push(numero)
}

function menorAMayor(a,b){
    return a-b;
}
console.log(`Los números ordenados de menor a mayor son: ${numeros.sort(menorAMayor)}`)
console.log(`Los números ordenados de mayor a menor son: ${numeros.sort(menorAMayor).reverse()}`)




*/

/*

let numeros = [];

let opcion = parseInt(prompt('Opciones: \n 1. Agregar un número al array \n 0. Salir \n Digite su opción: ')) 

while (opcion != 0){
    if(opcion ==1){
        let numero = parseInt(prompt('Digite un número para agreagar al array: '))
        numeros.push(numero)
    }else{
        console.log(`La opcion ${opcion} no es válida`)
        

    }
    opcion = parseInt(prompt('Opciones: \n 1. Agregar un número al array \n 0. Salir \n Digite su opción: ')) 
}
console.log(`Los números que ingresó al array son: ${numeros}`)


*/


/*
let tablaDe = parseInt(prompt('Digite el número del cual desea saber sus múltiplos: '))

console.log(`Tabla de multiplicar de ${tablaDe}`)

for(let i = 1; i <=10; i++){
    console.log(`${tablaDe} * ${i}  = ${i * tablaDe}`)
}

*/

/*

let nombre = prompt('Digite su nombre: ')

function mayuscula (nombre){
    return nombre.charAt(0).toUpperCase() + nombre.slice(1)
}
mayuscula(nombre)

let valorHora = parseInt(prompt('Ingrese el valor de la hora laborada: $'))

let horasLaboradas = parseInt(prompt('Ingrese la cantidad de horas laboradas: '))

let salario = valorHora * horasLaboradas

let deduccionSalud = salario * 0.04

let deduccionPension = salario * 0.04


console.log(`$${salario}`)

if(horasLaboradas < 24){
    console.log(`Señor(a) ${mayuscula(nombre)}, no es permitido laborar menos de 24 horas.`)
}

if(horasLaboradas > 24 && horasLaboradas <= 96){
    console.log(`Señor(a) ${mayuscula(nombre)}, su deducción en salud es $${deduccionSalud} y su deducción en pensión es $${deduccionPension}. Su salario total es $${salario - deduccionSalud - deduccionPension} `)
}else if(horasLaboradas > 96){
    let valorHoraExtra = parseInt(prompt('Ingrese el valor de la hora laborada extra: $'))
    let numeroHorasExtras = parseInt(prompt('¿Cuántas horas extra laboró? '))

    let salarioHorasExtras = valorHoraExtra * numeroHorasExtras
    console.log(`Señor(a) ${mayuscula(nombre)}, usted laboró ${numeroHorasExtras} horas extras para un valor de $${salarioHorasExtras}. Además, su deducción en salud es $${deduccionSalud} y su deducción en pensión es $${deduccionPension}. Su salario total es $${salario + salarioHorasExtras - deduccionSalud - deduccionPension}`)


}

*/

/*

let opcion = parseInt(prompt('Calculadora: \n 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir \n 0. salir \n Digite su opción: '));

function sumar(a, b) {
  return console.log(`${a} + ${b} = ${(a+b).toFixed(2)}`);
}

function restar(a, b) {
  return console.log(`${a} - ${b} = ${(a-b).toFixed(2)}`);
}

function multiplicar(a, b) {
  return console.log(`${a} * ${b} = ${(a*b).toFixed(2)}`);
}

function dividir(a, b) {
  return console.log(`${a} / ${b} = ${(a/b).toFixed(3)}`);
}

while (opcion != 0) {
  if (opcion >= 1 && opcion <= 4) {
    let a = parseFloat(prompt('Digite el valor de a: '));
    let b = parseFloat(prompt('Digite el valor de b: '));

    if (opcion == 1) {
      sumar(a, b);
    } else if (opcion == 2) {
      restar(a, b);
    } else if (opcion == 3) {
      multiplicar(a, b);
    } else if (opcion == 4) {
      dividir(a, b);
    }
  } else {
    console.log(`La opción ${opcion} no es válida.`);
  }

  opcion = parseInt(prompt('Calculadora: \n 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir \n 0. salir \n Digite su opción: '));
}
console.log('Has salido de la calculadora.');

*/

let numeros = [];

let cantidad = parseInt(prompt('¿Cuantós números desea promediar? '))

while(numeros.length < cantidad){
    let numero = parseInt(prompt('Digite un número: '));
    numeros.push(numero)

}

let suma = numeros.reduce((a,b)=>a + b);

let reducirDecimales = (suma /numeros.length).toFixed(2)

console.log(`El promedio de ${numeros} es: ${reducirDecimales }`)

let mayor = Math.max(...numeros)
let menor = Math.min(...numeros)

console.log(`El número mayor dentro del array es ${mayor}`)
console.log(`El número menor dentro del array es ${menor}`)

function ordenar (a,b){
    return a-b;
}

console.log(`El array ordenado es ${numeros.sort(ordenar)}`)