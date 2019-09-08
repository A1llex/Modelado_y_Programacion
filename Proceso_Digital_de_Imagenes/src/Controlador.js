/* El Controlador del Programa se encarga de la gestiond de entrada y salida
 *@author  Alex Gerardo Fernandez Aguilar 
 *@author  Luis Erick Montes Garcia 
 * La Finalidad de este programa es
 */


var archivoSubido = false;
gestorArchivo = document.getElementById("input-file");

/**
 * funcion que arroja la imagen procesada
 * @returns {undefined}
 */
gestorArchivo.ondrop = function(){
	obtenerImagen();
};
/**
 * funcion que solo recoje la imagen a modificar
 * @returns {undefined}
 */
gestorArchivo.oninput = function(){
	obtenerImagen();
};

/**
 * Valida que la entrada sea un forato valido para evitar errores
 * y modifica una variable para saberlo
 */
function obtenerImagen(){
	var archivo = gestorArchivo.value;
	if(validaArchivo(archivo)){
            alert("El formato del archivo es correcto");
            archivoSubido = true;
	}
	else 
            alert("Asegurese de que el tipo de su archivo sea jpg, jpeg, png");
}

/**
 * Verifica que la extension sea una extension deseada
 * @param {archivo} archivo es el documento a verificar
 * @returns {Boolean}
 */
function validaArchivo(archivo){
	var extPermitidas = /(\.jpg|\.jpeg|\.png)$/i;
	if(extPermitidas.exec(archivo))
		return true;
	return false;
}


module.exports = {validaArchivo,obtenerImagen};