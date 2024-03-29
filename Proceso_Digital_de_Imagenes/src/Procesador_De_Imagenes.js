/* Modelo aqui se procesa y se regresa la informacion de las imagenes modificadas
 *@author  Alex Gerardo Fernandez Aguilar 
 *@author  Luis Erick Montes Garcia 
 * La Finalidad de este programa es 
 */

/**
 * Filtro que cambia los valores en el vectror RGB 
 * a lo que se haya pedido atra vez de unabandera
 * @param {int} rgb Es una bandera Para saber de que color se aplicara el filtro
 * con 0 para Rojo  1 para Verde y 2 Para Azul
 * @param {document} img Sera la informacion de la imgen  a modificar
 * @returns {image} Sera la informacion de la imagen cambiada
 */
function filtroRGB(rgb,img){
    var color1;
    var color2;
    if(rgb === 0){
        color1 = 1; 
        color2 = 2;
    }else if(rgb === 1){
        color1 = 0;
        color2 = 2;
    }else if(rgb === 2) {
        color1 = 0;
        color2 = 1;
    }else{
        return ;
    }
    
    var ctx = img.getContext("2d");
    var imgData = ctx.getImageData(0, 0, img.width, img.height);
    for (var i = 0; i < imgData.data.length; i += 4) { 
        imgData.data[i+color1] = 0;
        imgData.data[i+color2] = 0;
    }
    return ctx.putImageData(imgData, 0, 0);
};

/**
 * Filto que divide  la imagen  en casillas  y a cada  unas se le saca su color promedio
 * se podra elegir el tamaño de estas regiones
 * @param {int} tam El tamaño de las acasillas en la que sera divida la imagen
 * @param {document} img Sera la informacion de la imgen  a modificar
 * @returns {undefined}
 */
function filtroMosaico(tam ,img){
    var ctx = img.getContext("2d");
    var imgData = ctx.getImageData(0, 0, img.width, img.height);
    
    for (var i = 0; i < imgData.data.length/2; i += 4) { 
        imgData.data[i+1] = 0;
        imgData.data[i+2] = 0;
    }
    return ctx.putImageData(imgData, 0, 0);
    
};
