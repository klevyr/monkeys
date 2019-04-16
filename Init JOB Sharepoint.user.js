// ==UserScript==
// @name         Init JOB Sharepoint
// @namespace    http://tampermonkey.net/
// @version      0.0.4a
// @description  Registra la entrada al trabajo.
// @author       @klevyr
// @match        http://srvsharepoint/sites/DinersClub/Centro_Servicios/Capacidad_Instalada_CS/Lists/lst_ing_sal/NewForm.aspx?=&IsDlg=1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var fireornot = true;
    var _min_enter = (Math.floor(Math.random() * 6) + 1) + 30;
    setInterval(function(){
        console.log("Hora de entrada: " + _min_enter)
        var dt = new Date();
        if(dt.getDay() >= 1 && dt.getDay() <= 5){
            console.log("Eval Date: " + dt)
            var elem;
            // Entry to work
            if( dt.getHours() == '08' && dt.getMinutes() == _min_enter ){
                elem = document.getElementById("ctl00_m_g_a818293e_949a_4a0e_b8a6_ddbffce13a1f_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem");
                if (typeof elem.onclick == "function") {
                    if(fireornot){
                        console.log("fire onclick elem");
                        document.getElementById("ctl00_m_g_a818293e_949a_4a0e_b8a6_ddbffce13a1f_ctl00_ctl05_ctl01_ctl00_ctl00_ctl04_ctl00_ctl00").checked = true;
                        elem.onclick.apply(elem);
                    }
                    fireornot = false;
                }
            }
        }
    }, 60000);//60 segs
})();
