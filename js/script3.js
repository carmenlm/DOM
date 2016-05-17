/**
 * Created by carmen on 16/05/16.
 */



window.onload = function () {
    'use strict';

    console.log('arranco');

    //si la ventana tiene la propiedad print que es una funcion
    //se podrá crear un boton imprimir
    if (typeof window.print == 'function') {

        //boton de imprimir
        var printButton = document.createElement('button');

        //si el boton no tiene texto
        if (printButton.textContent != 'undefined') {
            printButton.textContent = 'Imprime';
        } else {
            //IE
            printButton.innerText = 'Imprime'
        }

        //manejador evento click
        // la funcion imprime
        printButton.onclick = function () {
            window.print();
        };

        document.getElementById('padre').insertBefore(printButton, document.getElementById('main'));


    }


};
