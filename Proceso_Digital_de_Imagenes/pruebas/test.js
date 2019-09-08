/* Las Pruebas unitarias que se aseguraran de la estabilidad del prgrama
 *@author  Alex Gerardo Fernandez Aguilar 
 *@author  Luis Erick Montes Garcia 
 */

const assert = require('assert');
const control = require('../src/Controlador');
const filtro = require('../src/Procesador_De_Imagenes') ;

//Controlador
it('Prueba Unitaria de validaArchivo ', () => {
  assert.equal(control.validaArchivo(prueba.txt),false)
});
it('Prueba Unitaria de validaArchivo ', () => {
  assert.equal(control.validaArchivo(prueba.PNG),true)
});

it('Prueba Unitaria de validaArchivo ', () => {
  assert.equal(control.validaArchivo(prueba),false)
});

//Filtros
function redsquare(){
	var ctx = img.getContext("2d");
	var imgData = ctx.createImageData(100, 100);
	for (var i = 0; i < imgData.data.length; i += 4) {
  		imgData.data[i+0] = 255;
  		imgData.data[i+1] = 255;
  		imgData.data[i+2] = 255;
  		imgData.data[i+3] = 255;
  	return ctx.putImageData(imgData, 10, 10);
};
function whitequare(){
	var ctx = img.getContext("2d");
	var imgData = ctx.createImageData(100, 100);
	for (var i = 0; i < imgData.data.length; i += 4) {
  		imgData.data[i+0] = 255;
  		imgData.data[i+1] = 0;
  		imgData.data[i+2] = 0;
  		imgData.data[i+3] = 255;
  	return ctx.putImageData(imgData, 10, 10);
};

it('Prueba Unitaria de validaArchivo ', () => {
  assert.equal(filtro.filtroRGB(0,whitequare()),redsquare())
});

it('Prueba Unitaria de validaArchivo ', () => {
  assert.equal(filtro.filtroMosaico(0,whitequare()),whitequare())
});