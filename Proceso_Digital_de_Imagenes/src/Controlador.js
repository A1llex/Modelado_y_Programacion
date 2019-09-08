/* El Controlador del Programa se encarga de la gestiond de entrada y salida
 *@author  Alex Gerardo Fernandez Aguilar 
 *@author  Luis Erick Montes Garcia 
 * La Finalidad de este programa es
 */


var archivoSubido = false;
gestorArchivo = document.getElementById("input-file");
gestorArchivo.ondrop = function(event){
	obtenerImagen();
};
gestorArchivo.oninput = function(){
	obtenerImagen();
};

function obtenerImagen(){

	var archivo = gestorArchivo.value;
	if(validaArchivo(archivo)){
		alert("El formato del archivo es correcto");
	}
	else 
		alert("Asegurese de que el tipo de su archivo sea jpg, jpeg, png");

}

function validaArchivo(archivo){

	var extPermitidas = /(\.jpg|\.jpeg|\.png)$/i;
	if(extPermitidas.exec(archivo))
		return true;
	return false;
}