/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var longitud = array.length;
   return longitud;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   return array.map((array) => {return array + 1});
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var duracion = palabras.length;
   var oracion = "";

   for(var i = 0; i < duracion; i++){
      oracion = oracion + palabras.shift();
      if(duracion - 1 > i){
         oracion = oracion + " ";
      }
   }
   return oracion;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   for(let i = 0; i < array.length; i++){
      if(array[i] === elemento){
         return true;
      }
   }
   return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sumX = 0;
   for(let i = 0; i < arrayOfNums.length; i++){
      sumX = sumX + arrayOfNums[i];
   }
   return sumX;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var promX = 0;
   for(let i = 0; i < resultadosTest.length; i++){
      promX = promX + resultadosTest[i];   
   }
   promX =  promX / resultadosTest.length;
   return promX;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numMG  = 0;
   for(let i = 0; i < arrayOfNums.length; i++){
      if(numMG < arrayOfNums[i]){
         numMG = arrayOfNums[i];
      }
   }
   return numMG;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var resuMulti = 1;
   if(arguments.length  == 0){
      return 0;
   }
   
   for(let i = 0; i < arguments.length; i++){
      resuMulti *= arguments[i];
       
   }
   return resuMulti;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cantX = 0; 
   for(let i = 0; i < array.length; i++){
      if(array[i] > 18){
         cantX++;
      }
   }
   return cantX;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if((numeroDeDia === 1) || ( numeroDeDia === 7)){
      return "Es fin de semana";
   }
   return "Es dia laboral";
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   if((num >= 9000 && num <= 9999) || (num >= 900 && num <= 999) ||(num >= 90 && num <= 99) || (num === 9)){
      return true;
   }
   return false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var condiV = 0;
  for(let i = 0; i < array.length; i++){
   if(array[0] === array[i]){
      condiV++;
   }
  }
  if(condiV == array.length){
   return true;
  }
  return false; 
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nArray = [];
   var comp = 0;
   for(let i = 0; i < array.length; i++){
      if(array[i] === "Enero" ){
         nArray.push("Enero");
         comp++;
      }
      if((array[i] === "Marzo")){
         nArray.push("Marzo");
         comp++;
      }
      if(array[i] === "Noviembre"){
         nArray.push("Noviembre");
         comp++;
      }
      if(comp == 3){
         return nArray;
      }
   }
   return "No se encontraron los meses pedidos";
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tablaAV = [];
   for(let i = 0; i < 11; i++){
      var multiV = 6;
      multiV = multiV * i;
      tablaAV.push(multiV);
   }
   return tablaAV;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var nArray = [];
   for(let i = 0; i < array.length; i++){
      if(array[i] > 100){
         nArray.push(array[i]);
      }
   }
   return nArray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var numA = [];
   for(let i = 0; i < 10; i++){
      if(num == i){
         break;
      }
      num = num + 2
      numA.push(num);
      if(i == 9 ){
         return numA;
      }
   }
   return "Se interrumpió la ejecución";
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var numA = [];
   for(let i = 0; i < 10; i++){
      if(i == 5){
         continue;
      }
      num = num + 2;
      numA.push(num);
   }
   return numA;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
