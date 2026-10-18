var whatsApp = require('@electron/remote').getGlobal("whatsApp");
var pjson = require('@electron/remote').getGlobal('pjson');

$(document).ready(() => {
    $("#appversion").text(pjson ? pjson["version"] : "");
    if (!whatsApp || whatsApp.newVersion == null) {
        $("#appupdates").text("Unable to verify latest version from GitHub - please close and reopen this window");
    } else if (whatsApp.newVersion != "v" + (pjson ? pjson.version : "")) {
        $("#appupdates").text("A new version is available: " + whatsApp.newVersion + "!");
    } else if (whatsApp.newVersion == "v" + (pjson ? pjson.version : "")) {
        $("#appupdates").text("You're using latest version");
    }
});
