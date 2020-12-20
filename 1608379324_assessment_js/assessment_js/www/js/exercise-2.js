/**
 * #############################
 * ##  E J E R C I C I O   2  ##
 * #############################
 *
 * La constante data simula el contenido de un fichero ".csv". Podemos imaginar
 * que se trata de una tabla con filas y columnas. La primera fila de este tipo
 * de ficheros indica el nombre de cada columna.
 *
 * Por ejemplo, la primera columna se llama "id". Como podéis ver cada fila
 * tiene un "id" distinto: 142, 143, 144, etc. Lo mismo pasa para las demás
 * columnas. Por tanto, podemos entender que cada fila es una entidad de la
 * tabla, en este caso un piso.
 *
 * El objetivo de este ejercicio es convertir la información almacenada en data
 * en un array en el que cada posición sea un piso. El resultado final debería
 * ser algo similar a:
 *
 *    [
 *      ["142", "88", "12", "3", "1", "true", "false"],
 *      ["143", "120", "10", "4", "2", "false", "false"],
 *      ["144", "46", "18", "1", "1", "true", "true"],
 *      ["145", "52", "8", "1", "1", "true", "true"],
 *      ["146", "60", "3", "1", "1", "true", "true"],
 *      ["147", "140", "4", "4", "2", "true", "true"],
 *      ["148", "160", "9", "5", "3", "true", "true"],
 *      ["149", "60", "11", "1", "1", "false", "true"]
 *    ]
 *
 * Tips:
 *
 *  - El método "nombreString.trim()" elimina los espacios en blanco al principio
 *    y al final del array. No elimina los espacios que haya de por medio.
 *
 *    '    ¡Hola ola caracola!    '.trim() ---> '¡Hola ola caracola'
 *
 *  - Si queremos dividir un string donde haya un salto de línea podemos utilizar
 *    "nombreString.split('\n')".
 *
 */

'use strict';

let data = `  "id", "m2", "antiguedad", "habitaciones", "baños", "amueblado", "ascensor"
142, 88, 12, 3, 1, true,  false
143, 120, 10,  4, 2, false,  false
144, 46, 18,  1, 1, true,  true
145, 52, 8,  1, 1, true,  true
146, 60, 3,  1, 1, true,   true
147, 140, 4,  4, 2, true,   true
148, 160, 9,  5, 3, true,  true
149, 60, 11,  1, 1, false,  true
   `;
const modifiedData = data.trim().split('\n');
const dividedText0 = [];
const dividedText1 = [];
const dividedText2 = [];
const dividedText3 = [];
const dividedText4 = [];
const dividedText5 = [];
const dividedText6 = [];
const dividedText7 = [];
const dividedText8 = [];
const arrayOfArrays = [];

for (let i = 0; i < modifiedData.length; i++) {
  if (i === 0) {
    dividedText0.push(modifiedData[i]);
    console.log(dividedText0);
  } else if (i === 1) {
    dividedText1.push(modifiedData[i]);
    console.log(dividedText1);
  } else if (i === 2) {
    dividedText2.push(modifiedData[i]);
    console.log(dividedText2);
  } else if (i === 3) {
    dividedText3.push(modifiedData[i]);
    console.log(dividedText3);
  } else if (i === 4) {
    dividedText4.push(modifiedData[i]);
    console.log(dividedText4);
  } else if (i === 5) {
    dividedText5.push(modifiedData[i]);
    console.log(dividedText5);
  } else if (i === 6) {
    dividedText6.push(modifiedData[i]);
    console.log(dividedText6);
  } else if (i === 7) {
    dividedText7.push(modifiedData[i]);
    console.log(dividedText7);
  } else if (i === 8) {
    dividedText8.push(modifiedData[i]);
    console.log(dividedText8);
  } else {
    console.error('ha habido un error');
  }
}

arrayOfArrays.push(
  dividedText0,
  dividedText1,
  dividedText2,
  dividedText3,
  dividedText4,
  dividedText5,
  dividedText6,
  dividedText7,
  dividedText8
);

console.log(arrayOfArrays);

/**SE QUE NO ES LA SOLUCION ESPERADA... PERO NO HUBO MANERA :S */
