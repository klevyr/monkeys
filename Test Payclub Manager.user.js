// ==UserScript==
// @name         Test Payclub Manager
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Administrador de datos de la tienda de payclub de DES
// @author       @klevyr
// @match        http://10.100.68.55/Tienda/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.getElementById("transactionID").value = Date.now() / 1000 | 0;
    document.getElementById("Subtotal").value = '10.00';
    javascript:calcular();
})();