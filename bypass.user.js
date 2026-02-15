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
// @download-url https://github.com/loadstring1/bypass-are-you-watching-youtube/raw/refs/heads/main/bypass.user.js
// @update-url https://github.com/loadstring1/bypass-are-you-watching-youtube/raw/refs/heads/main/bypass.user.js
// @grant none
// ==/UserScript==

function customLog(str){
    console.log(`better nonstop: ${str}`)
}

function ass(){
    if (document.querySelector("#confirm-button")==null){
        customLog("working")
        setTimeout(ass,1000)
        return;
    }
    
    document.querySelector("#confirm-button").click();
    customLog("clicked");
    setTimeout(ass,1000)
};

customLog("started")
ass()
