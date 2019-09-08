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

var banderaFiltro = -1;

filtroAzul = document.getElementById('filtro-azul');
filtroAzul.addEventListener('click', activarFiltroAzul);
function activarFiltroAzul(){

	banderaFiltro = 2;
	mostrarImagen();

}

filtroRojo = document.getElementById('filtro-rojo');
filtroRojo.addEventListener('click', activarFiltroRojo);
function activarFiltroRojo(){

	banderaFiltro = 0;
	mostrarImagen();

}

filtroVerde = document.getElementById('filtro-verde');
filtroVerde.addEventListener('click', activarFiltroVerde);
function activarFiltroVerde(){

	banderaFiltro = 1;
	mostrarImagen();

}

var tamMosaico = 1;
filtroMosaico = document.getElementById('filtro-mosaico');
filtroMosaico.addEventListener('click', activarFiltroMosaico);
function activarFiltroMosaico(){
	
	if(!archivoSubido){
		alert("Suba un archivo valido.");
		return;
	}
	
	do{
    tamMosaico = window.prompt("Ingresa un numero entero mayor a 0 ", "");
    tamMosaico = parseInt(tamMosaico);
	}while(isNaN(tamMosaico) || tamMosaico < 1);
	mostrarImagen();
}


function mostrarImagen(){

	if(!archivoSubido){
		alert("Suba un archivo valido.");
		return;
	}

	var img = document.getElementById("output_image");
	var file = gestorArchivo.files[0];
	var reader = new FileReader();

	reader.onloadend = function(){

		const img = new Image();
		img.onload = function(){
			
			canvas = document.createElement('canvas');
			canvas.height = img.height;
			canvas.width = img.width;
			const context = canvas.getContext('2d');
			context.drawImage(img, 0, 0);
			
			if(banderaFiltro != -1)
				filtroRGB(banderaFiltro , canvas);
			else 
				filtroMosaico(tamMosaico, canvas);
			banderaFiltro = -1;
			tamMosaico = 1;
			document.body.appendChild(canvas);
		}

		img.src = reader.result;
	}

	reader.readAsDataURL(file);

}