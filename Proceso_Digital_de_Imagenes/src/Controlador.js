/* 
 *@author  Alex Gerardo Fernandez Aguilar 
 *@author  Luis Erick Montes Garcia 
 * La Finalidad de este programa es
 */


var archivoSubido = false;
gestorArchivo = document.getElementById("input-file");
gestorArchivo.ondrop = function(){archivoSubido = true};
gestorArchivo.oninput = function(){archivoSubido = true};
