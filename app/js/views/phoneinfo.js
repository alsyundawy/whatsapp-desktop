var whatsApp = require('@electron/remote').getGlobal("whatsApp");
var phoneinfo = require('@electron/remote').getGlobal('phoneinfo');

var PhoneInfoView = {
    bindEvents() {
        var $this = this;
        $("#close-button").on("click", () => {
            if (phoneinfo && phoneinfo.window) {
                phoneinfo.window.close();
            }
        });
    },

    init() {
        if (phoneinfo && phoneinfo.infos != null) {
            var phone = phoneinfo.infos.phone || {};
            $("#me").text(phoneinfo.infos.me || "");
            $("#battery").text((phoneinfo.infos.battery !== undefined ? phoneinfo.infos.battery : "") + "% (" + (phoneinfo.infos.plugged ? "charging" : "discharging") + ")");
            $("#platform").text(phoneinfo.infos.platform || "");
            $("#manufacturer").text(phone.manufacturer || "");
            $("#model").text(phone.model || "");
            $("#os_version").text(phone.os_version || "");
            $("#wa_version").text(phone.wa_version || "");
            $("#os_build_number").text(phone.os_build_number || "");
        } else {
            $("#me").text("Not available, try to refresh this page");
        }
        this.bindEvents();
    }
};

$(document).ready(() => {
    PhoneInfoView.init();
});
