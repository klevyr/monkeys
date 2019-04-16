// ==UserScript==
// @name         Init JOB Sharepoint
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @description  Registra la entrada al trabajo.
// @author       @klevyr
// @match        http://srvsharepoint/sites/DinersClub/Centro_Servicios/Capacidad_Instalada_CS/Lists/lst_ing_sal/NewForm.aspx?=&IsDlg=1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var fireornot = true;
    setInterval(function(){
        var dt = new Date();
        if(dt.getDay() >= 1 && dt.getDay() <= 5){
            console.log("Eval Date: " + dt)
            var elem;
            // Entry to work
            if(dt.getHours() == '08' && dt.getMinutes() >= 33 && dt.getMinutes() <= 38){
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
            // Entry to lunch
            /*
            if(dt.getHours() == '15' && dt.getMinutes() >= 25 && dt.getMinutes() <= 31){
                elem = document.getElementById("ctl00_m_g_a818293e_949a_4a0e_b8a6_ddbffce13a1f_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem");
                if (typeof elem.onclick == "function") {
                    if(fireornot){
                        console.log("fire onclick elem");
                        document.getElementById("ctl00_m_g_a818293e_949a_4a0e_b8a6_ddbffce13a1f_ctl00_ctl05_ctl01_ctl00_ctl00_ctl04_ctl00_ctl02").checked = true;
                        elem.onclick.apply(elem);
                    }
                    fireornot = false;
                }
            }*/
        }
        //location.href = "http://srvsharepoint/sites/DinersClub/Centro_Servicios/Capacidad_Instalada_CS/Lists/lst_ing_sal/NewForm.aspx?=&IsDlg=1";
    }, 42000);//7 min
})();