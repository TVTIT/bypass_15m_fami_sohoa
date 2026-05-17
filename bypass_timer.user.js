// ==UserScript==
// @name         Bypass 15 phút fami sohoa
// @version      1.0
// @description  Tự động hook vào setInterval và setTimeout để ép thời gian chờ về 1ms
// @author       TVTIT
// @match        https://fami.hust.edu.vn/sohoa/*
// @updateURL    https://github.com/TVTIT/bypass_15m_fami_sohoa/raw/refs/heads/main/bypass_timer.user.js
// @downloadURL  https://github.com/TVTIT/bypass_15m_fami_sohoa/raw/refs/heads/main/bypass_timer.user.js
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const injectCode = `
        const oldSetInterval = window.setInterval;
        window.setInterval = function(callback, ms) {
            // Ép bộ đếm tuần hoàn chạy với tốc độ 1ms
            return oldSetInterval(callback, 1);
        };

        const oldSetTimeout = window.setTimeout;
        window.setTimeout = function(callback, ms) {
            // Ép độ trễ chờ đợi chạy với tốc độ 1ms
            return oldSetTimeout(callback, 1);
        };
        console.log("Đã chèn thành công hook tua nhanh thời gian!");
    `;

    const script = document.createElement('script');
    script.textContent = injectCode;

    (document.head || document.documentElement).appendChild(script);

    script.remove();
})();