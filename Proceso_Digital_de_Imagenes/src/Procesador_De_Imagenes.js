/* 
 *@author  Alex Gerardo Fernandez Aguilar 
 *@author  Luis Erick Montes Garcia 
 * La Finalidad de este programa es 
 */

/**
 * 
 * @param {int} rgb Es una bandera Para saber de que color se aplicara el filtro
 * @param {document} img Sera la informacion de la imgen  a modificar (var c = document.getElementById("myCanvas");
 * @returns {image} Sera la informacion de la imagen cambiada
 */
function filtroRGB(rgb,img){
    var color1;
    var color2;
    if(rgb === 0){
        color1 = 1; 
        color2 = 2;
    }else {
        color1 = 0; 
    }if(rgb === 1){
        color2 = 2;
    }else{
        color2 = 1;
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
 * 
 * @param {type} arg1
 * @param {type} arg2
 * @returns {undefined}
 */
function filtroMosaico(arg1,arg2){
    //Body
    return (arg1+arg2);
};

module.exports = {filtroRGB,filtroMosaico};
