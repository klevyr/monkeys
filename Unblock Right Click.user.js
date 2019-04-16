// ==UserScript==
// @name         Unblock Right Click
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://prodomnicanal.interdin.info.ec/Diners/Diners/sso
// @match        https://www.pichincha.com/internexo/*
// @match        http://srvsccd.optarecuador.local:9081/maximo/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    document.oncontextmenu = function(){return true;}
    document.onkeydown = function(e){
	var keyDown =(window.event) ? event.keyCode : e.keyCode;
	if(keyDown==16 || keyDown==17 || keyDown==18 || keyDown==27 || (keyDown>=112 && keyDown<=123)){return true;}
}
})();