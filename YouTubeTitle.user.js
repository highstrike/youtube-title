/* globals jQuery */

// ==UserScript==
// @name         YouTube Title
// @description  Formats titles by making them lowercase and capitalizing the first letter.
// @icon         https://raw.githubusercontent.com/highstrike/youtube-title/master/icon.png
// @namespace    https://github.com/highstrike/youtube-title
// @version      1.4
// @author       highstrike
// @license      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function($) { 'use strict';
    window.setInterval(function() {
        $('a#video-title, span#video-title, h1.title').each(function() {
            let self = $(this);

            if(!self.hasClass('formatted')) {
                let s = self.find('yt-formatted-string'),
                    t = s.length > 0 ? s : self;

                t.text(capitalize(t.text().trim().toLowerCase()));
                self.addClass('formatted');
            }
        });
    }, 1000);
})(jQuery);

function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}
