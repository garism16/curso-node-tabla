//En el archivo app.js crear la tabla de multiplicar del 5.
// hacer la tabla del 5 en javascrip
/*console.clear();
console.log('=============');
console.log(' Tabla del 5');
console.log('=============');
const j = 5;
for(i = 1;i<=10;i++){
 console.log(`${j} x ${i} = ${j * i}`);

}*/

// hacer la tabla del 5 en javascrip
/*const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
console.clear();
console.log('=============');
console.log(' Tabla del 5');
console.log('=============&');
const j = 5;
let salida = '';
for(i = 1;i<=10;i++){
 salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.

}
console.log(salida);

//el file system para grabar un archivo. en el primer parametro
//si no se pone el path, se graba en la rireccion donde esta ejecutando.
//segundo parametro son los datos. y el tercero es un callback que recibe el error si
//algo sale mal.
fs.writeFile('tabla-del-5.txt' , salida, (err) => {
 if(err) throw err;
 console.log('Tabla-del-5 creado');
})*/

// hacer la tabla del 5 en javascrip
/*const {crearArchivo} = require('./helper/multiplicar')
console.clear();
const j = 3;
crearArchivo(j);*/

// hacer la tabla del 5 en javascrip
/*const {crearArchivo} = require('./helper/multiplicar')
console.clear();
console.log(process.argv);
const j = 6;
/* crearArchivo(j)
    .then( nombreArchivo =&gt; console.log(nombreArchivo, &#39;Creado&#39;))
    .catch( err =&gt; console.log(err));
 */

// hacer la tabla del 5 en javascrip
/*const {crearArchivo} = require('./helper/multiplicar')
console.clear();
const [ , ,arg3] = process.argv; // estamos tomando el tercer argumento.
console.log(arg3);
const j = 6;
/* crearArchivo(j)
    .then( nombreArchivo =&gt; console.log(nombreArchivo, &#39;Creado&#39;))
    .catch( err =&gt; console.log(err));
 */
// hacer la tabla del 5 en javascrip
/*const {crearArchivo} = require('./helper/multiplicar')
console.clear();
const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
console.log(arg3);
const j = 6;
/* crearArchivo(j)
    .then( nombreArchivo =&gt; console.log(nombreArchivo, &#39;Creado&#39;))
    .catch( err =&gt; console.log(err));
 */
/*const {crearArchivo} = require('./helper/multiplicar')
console.clear();
const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
const[ , j ]= arg3.split( '='); //separa el string por el caracter =
console.log(j);
//const j = 6;
 crearArchivo(j)
 .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
 .catch( err => console.log(err));*/

 // hacer la tabla del 5 en javascrip
// hacer la tabla del 5 en javascrip
/*const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs').argv;
console.clear();
console.log(process.argv);
console.log(argv);
console.log('j de yargs:', argv.j);
//const [ , ,arg3 = &#39;j = 5&#39;] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split( &#39;=&#39;); //separa el string por el caracter =
//console.log(j);
/* crearArchivo(j)
    .then( nombreArchivo =&gt; console.log(nombreArchivo, &#39;Creado&#39;))
    .catch( err =&gt; console.log(err)); */

// hacer la tabla del 5 en javascrip
/*const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs')
.option('b', {
 alias: 'base',
 type: 'number'
}) 
 .argv;
console.clear();
//console.log(process.argv);
console.log(argv);
console.log('Base de yargs:', argv.b);*/

/*const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');

const argv = require('yargs')
.option('b', {
 alias: 'base',
 type: 'number',
demandOption: true
})
.check((argv, options ) => {
 if(isNaN(argv.b)){
throw 'La base debe ser un Numero'
}

return true;

}) 
 .argv;
console.clear();
//console.log(process.argv);
console.log(argv);
console.log('Base de yargs:', argv.b);*/

/*const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs')
.option('b', {
alias: 'base',
type: 'number',
demandOption: true
})
.check((argv, options ) => {
 if(isNaN(argv.b)){
throw 'La base debe ser un Numero';

}
 return true;
}) 
 .argv;
console.clear();
//console.log(process.argv);
console.log(argv);
//console.log(&#39;Base de yargs:&#39;, argv.b);
//const [ , ,arg3 = &#39;j = 5&#39;] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split( &#39;=&#39;); //separa el string por el caracter =
//console.log(j);
crearArchivo(argv.b)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err => console.log(err));*/

const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./Config/yargs');
console.clear();
//const [ , ,arg3 = &#39;j = 5&#39;] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split( &#39;=&#39;); //separa el string por el caracter =
crearArchivo(argv.b, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch( err => console.log(err));