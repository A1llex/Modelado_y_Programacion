
const assert = require('assert');

/*
it('should return true', () => {
  assert.equal(true, true)
});
*/

const filtro = require('../src/Procesador_De_Imagenes');

it('ta dha', () => {
  assert.equal(filtro.filtroMosaico(1,2), 3)
});