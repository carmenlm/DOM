/**
 * Created by carmen on 17/05/16.
 */

/**
 * funcion para abrir el modal
 */
function openModal() {
    'use strict';

    //manejador de eventos del close
    document.getElementById('closeModal').onclick = closeModal;

    //cambio el display a inline-block
    //muestro el div
    document.getElementById('modal').style.display = 'inline-block';

    //deshabilito el boton de abrir el modal
    document.getElementById('openModal').onclick = null;


}

/**
 * funcion para cerrar el modal
 */
function closeModal() {
    'use strict';

    //manejador evento del open
    document.getElementById('openModal').onclick = openModal;

    //cambio el display a none
    //dejo de mostrar el div modal
    document.getElementById('modal').style.display = 'none';

    //deshabilito el boton cerrar
    document.getElementById('closeModal').onclick = null;
}

//cuando carga el window
window.onload = function () {
    'use strict';

    //manejador eventos para abrir el modal
    document.getElementById('openModal').onclick = openModal;
};