/**
 * Created by carmen on 16/05/16.
 */

console.log('arranco');

/**
 * funcion que crea el popup
 * @returns {boolean} --devuelvo false para que no se envie
 */
function createPopup() {
    'use strict';

    //creamos el popup
    var popup = window.open('popupB.html', 'PopUp', 'height=100,width=100,top=100,left=100,location=no, p resizable=yes,scrollbars=yes');

    //si la ventana esta abierta
    if ((popup !== null) && !popup.closed) {
        //ponemos el popup con foco
        popup.focus();

        return false;
    }
}

window.onload = function () {
    'use strict';

    //manejador de evencto click de link
    document.getElementById('link').onclick = createPopup;
}