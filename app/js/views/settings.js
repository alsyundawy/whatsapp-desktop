var whatsApp = require('@electron/remote').getGlobal("whatsApp");
var settings = require('@electron/remote').getGlobal('settings');
var config = require('@electron/remote').getGlobal('config');
const {dialog} = require('@electron/remote');

var SettingsView = {
    bindEvents() {
        var $this = this;
        $("#save-button").on("click", (e) => {
            e.preventDefault();
            if ($(".invalid").length > 0 ) {
                return;
            }
            $this.saveSettings();
            settings.window.close();
        });

        $("#close-button").on("click", () => {
            settings.window.close();
        });

        $("#useProxy").on("change", () => {
            $("#httpProxy").prop("disabled", !($("#useProxy").is(":checked")));
            $("#httpsProxy").prop("disabled", !($("#useProxy").is(":checked")));
        });
    },

    init() {
        document.title = _("Settings");

        $("#custombackground_enable").attr("checked", config.get("background-image") != undefined);
        if (config.get("background-image") != undefined) {
            $("#custombackground_file").val(config.get("background-image"));
            $("#background_opacity").val(config.get("background-opacity"));
        } else {
            $("#background_opacity").val("100");
        }

        if (config.get("fontSize") != undefined) {
            $("#fontSize").val(config.get("fontSize"));
        }

        $("#darkMode").attr("checked", config.get("darkMode") == true);
        $("#blurImages").attr("checked", config.get("blurImages") == true);
        $("#autoHideMenuBar").attr("checked", config.get("autoHideMenuBar") == true);
        $("#disablegpu").attr("checked", config.get("disablegpu") == true);
        $("#globalshortcut").attr("checked", config.get("globalshortcut") == true);
        $("#autostart").attr("checked", config.get("autostart") == true);
        $("#startminimized").attr("checked", config.get("startminimized") == true);
        $("#trayicon").attr("checked", config.get("trayicon") != false);
        $("#avatars").attr("checked", config.get("hideAvatars"));
        $("#previews").attr("checked", config.get("hidePreviews"));
        if (config.get("thumbSize")) {
            $("#thumb-size").val(config.get("thumbSize"));
        }
        $("#useProxy").attr("checked", config.get("useProxy"));
        $("#httpProxy").val(config.get("httpProxy"));
        $("#httpsProxy").val(config.get("httpsProxy"));
        $("#httpProxy").prop("disabled", !($("#useProxy").is(":checked")));
        $("#httpsProxy").prop("disabled", !($("#useProxy").is(":checked")));

        $("#customcss_enable").attr("checked", config.get("customcss") != undefined);
        if ($("#customcss_enable").is(":checked")) {
            $("#customcss_file").val(config.get("customcss"));
        }

        // Disable unavailable options
        if (process.platform === 'darwin') {
            $("#autostart").prop("disabled", true);
            $("#autoHideMenuBar").prop("disabled", true);
            $("#trayicon").prop("disabled", true);
            $("#trayicon").prop("checked", false);
        }

        this.bindEvents();
    },

    saveSettings() {

        if ($("#customcss_enable").is(":checked")) {
            config.set("customcss", $("#customcss_file").val());
        } else {
            config.set("customcss", undefined);
        }

        if ($("#custombackground_enable").is(":checked")) {
            config.set("background-image", $("#custombackground_file").val());
            config.set("background-opacity", $("#background_opacity").val());
        } else {
            config.set("background-image", undefined);
        }

        config.set("fontSize", $("#fontSize").val());

        config.set("darkMode", $("#darkMode").is(":checked"));
        config.set("blurImages", $("#blurImages").is(":checked"));
        config.set("autoHideMenuBar", $("#autoHideMenuBar").is(":checked"));
        config.set("disablegpu", $("#disablegpu").is(":checked"));
        config.set("globalshortcut", $("#globalshortcut").is(":checked"));
        config.set("autostart", $("#autostart").is(":checked"));
        config.set("startminimized", $("#startminimized").is(":checked"));
        config.set("hideAvatars", $("#avatars").is(":checked"));
        config.set("hidePreviews", $("#previews").is(":checked"));
        config.set("thumbSize", parseInt($("#thumb-size").val(), 10));
        config.set("trayicon", $("#trayicon").is(":checked"));
        if ($("#useProxy").is(":checked")) {
            config.set("useProxy", $("#useProxy").is(":checked"));
            config.set("httpProxy", $("#httpProxy").val());
            config.set("httpsProxy", $("#httpsProxy").val());
        } else {
            config.unSet("useProxy");
            config.unSet("httpProxy");
            config.unSet("httpsProxy");
        }
        config.saveConfiguration();
        config.applyConfiguration();
        whatsApp.window.reload();
    }
};

function chooseCustomCSS() {
    if ($("#customcss_enable").is(":checked")) {
        const handleFiles = function (fileNames) {
            if (!fileNames || fileNames.length === 0) {
                $("#customcss_enable").prop("checked", false);
                return;
            }
            $("#customcss_file").val(fileNames[0]);
        };
        try {
            const dialogRes = dialog.showOpenDialog({
                properties: ['openFile'],
                filters: [{ name: 'CSS Files', extensions: ['css'] }]
            }, handleFiles);
            if (dialogRes && typeof dialogRes.then === 'function') {
                dialogRes.then(result => {
                    if (result.canceled || !result.filePaths || result.filePaths.length === 0) {
                        $("#customcss_enable").prop("checked", false);
                        return;
                    }
                    $("#customcss_file").val(result.filePaths[0]);
                }).catch(() => {
                    $("#customcss_enable").prop("checked", false);
                });
            }
        } catch (e) {
            $("#customcss_enable").prop("checked", false);
        }
    } else {
        $("#customcss_file").val("");
    }
}

function chooseChatBackground() {
    if ($("#custombackground_enable").is(":checked")) {
        const handleFiles = function (fileNames) {
            if (!fileNames || fileNames.length === 0) {
                $("#custombackground_enable").prop("checked", false);
                return;
            }
            const file = fileNames[0];
            if (file.endsWith(".jpg") || file.endsWith(".jpeg")
                || file.endsWith(".png")
                || file.endsWith(".gif")) {
                $("#custombackground_file").val(file);
            } else {
                alert(_("Please choose a JPEG or PNG file"));
                $("#custombackground_enable").prop("checked", false);
            }
        };
        try {
            const dialogRes = dialog.showOpenDialog({
                properties: ['openFile'],
                filters: [{ name: 'Images', extensions: ['jpg', 'jpeg', 'png', 'gif'] }]
            }, handleFiles);
            if (dialogRes && typeof dialogRes.then === 'function') {
                dialogRes.then(result => {
                    if (result.canceled || !result.filePaths || result.filePaths.length === 0) {
                        $("#custombackground_enable").prop("checked", false);
                        return;
                    }
                    handleFiles(result.filePaths);
                }).catch(() => {
                    $("#custombackground_enable").prop("checked", false);
                });
            }
        } catch (e) {
            $("#custombackground_enable").prop("checked", false);
        }
    } else {
        $("#custombackground_file").val("");
    }
}

$(document).ready(() => {
    SettingsView.init();
});
