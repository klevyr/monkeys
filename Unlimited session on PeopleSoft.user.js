// ==UserScript==
// @name         Unlimited session on PeopleSoft
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Actualiza cada 90 min de modo que no se quede sin sesion.
// @author       @klevyr
// @match        https://srvpswebapp4.optarecuador.local:4000/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setTimeout(function()
    {
        window.location.reload(false);
    }, 5400000);
})();