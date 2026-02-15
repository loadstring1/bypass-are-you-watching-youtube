// ==UserScript==
// @name YouTube Better NonStop
// @namespace https://github.com/loadstring1/bypass-are-you-watching-youtube
// @homepage https://github.com/loadstring1/bypass-are-you-watching-youtube
// @version 0.1
// @description  Bypasses are you still watching
// @match *://*.youtube.com/*
// @match *://music.youtube.com/*
// @match *://*.music.youtube.com/*
// @run-at document-end
// @author loadstring1 - coza
// @download-url https://raw.githubusercontent.com/loadstring1/bypass-are-you-watching-youtube/refs/heads/main/bypass.js
// @update-url https://raw.githubusercontent.com/loadstring1/bypass-are-you-watching-youtube/refs/heads/main/bypass.js
// @grant none
// ==/UserScript==

function ass(){
    if (document.querySelector("#confirm-button")==null){
        setTimeout(ass,1000)
        return;
    }
    
    document.querySelector("#confirm-button").click();
    console.log("clicked");
    setTimeout(ass,1000)
};

console.log("youtube better nonstop started")
ass()
