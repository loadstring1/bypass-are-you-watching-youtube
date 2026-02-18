// ==UserScript==
// @name YouTube Better NonStop
// @namespace https://github.com/loadstring1/bypass-are-you-watching-youtube
// @homepage https://github.com/loadstring1/bypass-are-you-watching-youtube
// @version 1.3
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
    var shittyDialog=document.querySelector("tp-yt-paper-dialog")
    var confirmButton=shittyDialog && shittyDialog.querySelector("#confirm-button") || null

    if (shittyDialog==null || confirmButton==null){
        customLog("waiting for this stupid ass popup")
        setTimeout(ass,1000)
        return;
    }

    if (window.getComputedStyle(shittyDialog).display=="none"){
        customLog("shitty popup is hidden. retrying...")
        setTimeout(ass,1000)
        return;
    }
    
    customLog("detected shitty dialog - waiting 3 seconds")
    await new Promise((resolve=>setTimeout(resolve,3000)))

    confirmButton.click()
    customLog("confirm button clicked.")
    
    setTimeout(ass,1000)
};

customLog(`started ${location.href}`)
ass()
