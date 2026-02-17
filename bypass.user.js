// ==UserScript==
// @name YouTube Better NonStop
// @namespace https://github.com/loadstring1/bypass-are-you-watching-youtube
// @homepage https://github.com/loadstring1/bypass-are-you-watching-youtube
// @version 1.2
// @description  Bypasses are you still watching
// @match *://*.youtube.com/*
// @match *://music.youtube.com/*
// @match *://*.music.youtube.com/*
// @run-at document-end
// @author loadstring1 - coza
// @downloadURL https://github.com/loadstring1/bypass-are-you-watching-youtube/raw/refs/heads/main/bypass.user.js
// @updateURL https://github.com/loadstring1/bypass-are-you-watching-youtube/raw/refs/heads/main/bypass.user.js
// @grant none
// @noframes
// ==/UserScript==

function customLog(str){
    console.log(`better nonstop: ${str}`)
}

async function ass(){
    if (document.querySelector("tp-yt-paper-dialog")==null || document.querySelector("#confirm-button")==null){
        customLog("waiting for this stupid ass popup")
        setTimeout(ass,1000)
        return;
    }
    
    customLog("alright just refresh page lmao")
    location.reload()
    
    setTimeout(ass,1000)
};

customLog(`started ${location.href}`)
ass()
