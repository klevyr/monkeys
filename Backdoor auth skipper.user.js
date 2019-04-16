// ==UserScript==
// @name         Backdoor auth skipper
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Mantiene la informacion de credenciales de acceso al backdoor
// @author       klevyr
// @match        http://srvintranetn/interdin.backdoor/BackDoor.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.getElementById('tbCI').value = "1716162977";
    document.getElementById('tbCodigo').value = "Q2022363";
    document.getElementById('tbClave').value = "1234";
    // submitform
    $('#btnAceptar').trigger('click');
})();
