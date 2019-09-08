/* Las Pruebas unitarias que se aseguraran de la estabilidad del prgrama
 *@author  Alex Gerardo Fernandez Aguilar 
 *@author  Luis Erick Montes Garcia 
 */

const assert = require('assert');
//const filtro = require('../src/Controlador');
const filtro = require('../src/Procesador_De_Imagenes') ;

/*
it('Prueba Unitaria de validaArchivo ', () => {
  assert.equal(validaArchivo(prueba.txt),false)
});

it('Prueba Unitaria de validaArchivo ', () => {
  assert.equal(validaArchivo(prueba.PNG),false)
});
*/

    it('Prueba Unitaria de validaArchivo ', () => {
  assert.equal(filtro.filtroRGB(3,5),"Error en la bandera")
	});


