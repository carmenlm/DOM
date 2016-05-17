/**
 * Created by carmen on 16/05/16.
 */
console.log('arranco');

/**
 * funcion que crea el popup
 * @param e -- evento
 * @returns {boolean} --devuelvo false para que no se envie
 */
function createPopup(e) {
    'use strict';

    if (typeof e == 'undefined') {
        var e = window.event;
    }

    var target = e.target || e.srcElement;

    //creamos el popup
    var popup = window.open(target.href, 'PopUp', 'height=100,width=300,top=100,left=100,location=no, p resizable=yes,scrollbars=yes');

    //si la ventana esta abierta
    if ((popup !== null) && !popup.close) {
        //ponemos el popup con foco
        popup.focus();

        return false;
    } 
}

window.onload = function () {
    'use strict';

    for (var i = 0, count = document.links.length; i < count; i++) {

        document.links[i].onclick = createPopup;

    }
}