/* 
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
		alert("bien");
	}
	else 
		alert("mal");

}

function validaArchivo(archivo){

	var extPermitidas = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
	if(extPermitidas.exec(archivo))
		return true;
	return false;
}