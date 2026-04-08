// ==UserScript==
// @name YouTube Better NonStop nightly
// @namespace https://github.com/loadstring1/bypass-are-you-watching-youtube
// @homepage https://github.com/loadstring1/bypass-are-you-watching-youtube
// @version 1.9.2.6773
// @description Bypasses are you still watching
// @match *://*.youtube.com/*
// @match *://music.youtube.com/*
// @match *://*.music.youtube.com/*
// @run-at document-start
// @author loadstring1 - coza
// @downloadURL https://github.com/loadstring1/bypass-are-you-watching-youtube/raw/refs/heads/main/nightly.user.js
// @updateURL https://github.com/loadstring1/bypass-are-you-watching-youtube/raw/refs/heads/main/nightly.user.js
// @grant none
// @noframes
// ==/UserScript==

var userPaused=false;

function customLog(str){
    console.log(`better nonstop: ${str}`)
}

// var shouldKeepChecking=false
// function keepVideoPlaying(vid){
//     if (shouldKeepChecking==false) return;
//     customLog("loop checking if youtube still kept the video paused")

//     if (vid.paused){
//         vid.play()
//     }

//     setTimeout(()=>{
//         keepVideoPlaying(vid)
//     },100)
// }

async function ass(){
    var video=document.querySelector("video")
    var shittyDialog=document.querySelector("tp-yt-paper-dialog")
    var confirmButton=shittyDialog && shittyDialog.querySelector("#confirm-button") || null

    if (video==null || shittyDialog==null || confirmButton==null){
        customLog("waiting for this stupid ass popup")
        setTimeout(ass,300)
        return;
    }

    if (userPaused){
        customLog("user paused the video ignoring pop-up.")
        setTimeout(ass,300)
        return;
    }

    if (shittyDialog.style && shittyDialog.style.display=="none"){
        customLog("shitty popup is hidden. retrying...")
        setTimeout(ass,300)
        return;
    }

    customLog("detected shitty dialog - waiting 1 second")

    // shouldKeepChecking=true
    // keepVideoPlaying(video)

    await new Promise((resolve=>setTimeout(resolve,1000)))

    confirmButton.click()
    customLog("confirm button clicked.")

    // setTimeout(()=>{
    //     shouldKeepChecking=false
    //     customLog("loop check killed.")
    // },5000)

    setTimeout(ass,1000)
};

customLog(`started ${location.href}`)
// customLog(`hooking focus`)

// window.addEventListener("blur",(e)=>{
//     if (e.target && e.target.className=="masthead-finish")return;
//     if (e.target && e.target.className=="chunked masthead-finish") return;
//     e.stopImmediatePropagation()
// },{capture:true})
// Object.defineProperty(document, "visibilityState", {value: "visible", writable: false});
// Object.defineProperty(document, "hidden", {value: false, writable: false});
// Object.defineProperty(document, "hasFocus",{
//     value:()=>{return true;},
//     writable:false,
// })

// customLog("focus hooked")


//before fix
// const originalPause = HTMLVideoElement.prototype.pause;
// HTMLVideoElement.prototype.pause = function() {
//     const stack = new Error().stack;

//     const splitted=stack.split("\n")
//     const lastStack=splitted[splitted.length-2]

//     if (lastStack && lastStack.includes("pause")){
//         customLog("are you there pause blocked!")
//         return;
//     }

//     customLog(`${stack}\npaused the video`)
//     console.log(splitted)
//     customLog(`last stack: ${lastStack}`)
//     customLog(`last stack length ${lastStack!=null && lastStack.length || "null"}`)

//     return originalPause.apply(this, arguments);
// };

customLog("hooking pause")

//after fix
const originalPause = HTMLVideoElement.prototype.pause;
const originalPlay = HTMLVideoElement.prototype.play

HTMLVideoElement.prototype.play = function(){
    userPaused=false;
    customLog("play called userpause set to false")
    return originalPlay.apply(this,arguments)
}

HTMLVideoElement.prototype.pause = function() {
    const stack=new Error().stack;
    const splitted=stack.split("\n")
    const lastStack=splitted[splitted.length-2]

    originalPause.apply(this, arguments);

    if (userPaused){
        customLog("stack check and stack logging ignored because user paused the video.")
        return;
    }

    if (lastStack && lastStack.includes("pause")){
        customLog("are you there pause blocked!")
        this.play()
        return;
    }

    userPaused=true;

    customLog(`${stack}\npaused the video`)
    console.log(splitted)
    customLog(`last stack: ${lastStack}`)
    customLog(`last stack length ${lastStack!=null && lastStack.length || "null"}`)

    return;
};

customLog("pause and play hooked")
ass()