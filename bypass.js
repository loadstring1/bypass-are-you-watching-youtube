// ==UserScript==
// @name YouTube bypass are you still watching
// @namespace github.com
// @version 0.1
// @description  Bypasses are you still watching
// @match http://www.youtube.com/watch?v=*
// @run-at document-end
// ==/UserScript==

function ass(){
    document.querySelector("#confirm-button").click(); 
    console.log("clicked"); 
    setTimeout(ass,1000)
}; 

ass()
