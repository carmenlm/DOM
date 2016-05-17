/**
 * Created by carmen on 17/05/16.
 */

/**
 * funcion que va a devolver el numero de elementos
 * @param etiqueta -- nombre elemento html que queremos contar
 * @returns {number} -- devuelvo el num elementos html
 */
function numElementos(etiqueta) {

    //cadena para pedir el getElemeentsbytagname
    var tagName = "'" + etiqueta + "'";

    //saco el getElementsbytagneme de la etiqueta que paso por paramentro
    var elementos = document.getElementsByTagName(tagName);

    //devuelvo el length
    return elementos.length;


}

function devolverElementoPosicion(posicion, etiqueta) {

}

window.onload = function () {


};
