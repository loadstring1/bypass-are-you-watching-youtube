// ==UserScript==
// @name YouTube Better NonStop stable
// @namespace https://github.com/loadstring1/bypass-are-you-watching-youtube
// @homepage https://github.com/loadstring1/bypass-are-you-watching-youtube
// @version 1.9.1.6775
// @description Bypasses are you still watching
// @match *://*.youtube.com/*
// @match *://music.youtube.com/*
// @match *://*.music.youtube.com/*
// @run-at document-start
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
    var video=document.querySelector("video")
    var shittyDialog=document.querySelector("tp-yt-paper-dialog")
    var confirmButton=shittyDialog && shittyDialog.querySelector("#confirm-button") || null

    if (video==null || shittyDialog==null || confirmButton==null){
        customLog("waiting for this stupid ass popup")
        setTimeout(ass,300)
        return;
    }

    if (shittyDialog.style && shittyDialog.style.display=="none"){
        customLog("shitty popup is hidden. retrying...")
        setTimeout(ass,300)
        return;
    }

    customLog("detected shitty dialog - waiting 1 second")

    await new Promise((resolve=>setTimeout(resolve,1000)))

    confirmButton.click()
    customLog("confirm button clicked.")

    setTimeout(ass,1000)
};

customLog(`started ${location.href}`)

customLog("hooking pause")

const originalPause = HTMLVideoElement.prototype.pause;
HTMLVideoElement.prototype.pause = function() {
    const stack=new Error().stack;
    const splitted=stack.split("\n")
    const lastStack=splitted[splitted.length-2]

    originalPause.apply(this, arguments);

    if (lastStack && lastStack.includes("pause")){
        customLog("are you there pause blocked!")
        this.play()
        return;
    }

    customLog(`${stack}\npaused the video`)
    console.log(splitted)
    customLog(`last stack: ${lastStack}`)
    customLog(`last stack length ${lastStack!=null && lastStack.length || "null"}`)

    return;
};

customLog("pause hooked")

ass()