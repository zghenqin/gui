/**
 * Author: guoyao
 * Time: 08-29-2013 16:09
 * Blog: http://www.guoyao.me
 */

require(["jquery", "prettify", "gui"], function ($, prettify) {
    var root = window,
        gui = root.gui;

    if (gui.browserInfo.isIE) {
        if (gui.browserInfo.version <= 9) { // lte IE 9
            $(".gui-btn").guiButton();
        }
        if (gui.browserInfo.version <= 8) { // lte IE 8
            $(".gui-callout p:last-child").css("margin-bottom", 0);
        }
    }

    $(".gui-btn-bar").guiButtonBar({
        selectedIndex: 0
    });

    prettify.prettyPrint();
});