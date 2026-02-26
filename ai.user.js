// ==UserScript==
// @name YouTube Anti-Anti-Watcher (by AI)
// @match https://www.youtube.com/*
// @match https://youtube.com/*
// @match http://www.youtube.com/*
// @match http://youtube.com/*
// @version 1.0
// @author loadstring1 - coza
// @downloadURL https://github.com/loadstring1/bypass-are-you-watching-youtube/raw/refs/heads/main/ai.user.js
// @updateURL https://github.com/loadstring1/bypass-are-you-watching-youtube/raw/refs/heads/main/ai.user.js
// @run-at document-start
// @grant none
// @noframes
// ==/UserScript==

// Tworzymy proxy dla obiektu window, aby wyłapać moment definicji zmiennej _
console.log("sperma sperma test")
let youtubeInternal = undefined;

Object.defineProperty(window, '_', {
    get: function() {
        return youtubeInternal;
    },
    set: function(val) {
        youtubeInternal = val;
        
        // W TYM MIEJSCU MASZ DOSTĘP DO ICH LOGIKI ZANIM RUSZY
        console.log("Przechwycono wewnętrzny skrypt YouTube!");

        // Przykład: Nadpisujemy funkcję sprawdzającą obecność, jeśli już istnieje
        if (youtubeInternal.youthereDataChanged_) {
            youtubeInternal.youthereDataChanged_ = function() {
                console.log("YouTube chciał sprawdzić czy jesteś, ale go zablokowałam.");
                return; // Nic nie rób
            };
        }
    },
    configurable: true
});

console.log("elo")