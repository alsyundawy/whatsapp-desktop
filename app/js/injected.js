(function () {

    const {ipcRenderer} = require('electron');
    var updatePhoneInfoInterval = null;

    function updatePhoneInfo() {
        if (window.Store == undefined || window.Store.Conn == undefined) {
            return;
        }
        ipcRenderer.send('phoneinfoupdate', {
            'info': window.Store.Stream.info,
            'me': "+" + window.Store.Conn.me.split("@")[0],
            'battery': window.Store.Conn.battery,
            'plugged': window.Store.Conn.plugged,
            'platform': window.Store.Conn.platform,
            'phoneActive': window.Store.Stream.phoneActive,
            'phone': {
                'manufacturer': window.Store.Conn.phone.device_manufacturer,
                'model': window.Store.Conn.phone.device_model,
                'mcc': window.Store.Conn.phone.mcc,
                'mnc': window.Store.Conn.phone.mnc,
                'os_build_number': window.Store.Conn.phone.os_build_number,
                'os_version': window.Store.Conn.phone.os_version,
                'wa_version': window.Store.Conn.phone.wa_version
            }
        });
        if (updatePhoneInfoInterval != null) {
            clearInterval(updatePhoneInfoInterval);
            updatePhoneInfoInterval = null;
            setInterval(updatePhoneInfo, 2000)
        }
    }

    console.log("Waiting for DOMContentLoaded");
    document.addEventListener('DOMContentLoaded', function () {
        console.log("DOMContentLoaded event");
        updatePhoneInfoInterval = setInterval(updatePhoneInfo, 500);

        // pass in the target node, as well as the observer options
        var observer = new MutationObserver(function (mutations) {
            console.log("Mutations occurred: ", mutations.length);

            var inputSearch = document.querySelector("input.input-search");
            if (inputSearch) {
                console.log("Adding event listeners");

                document.addEventListener("keydown", function (event) {
                    // cmd+k and cmd+f focuses on search input.
                    if ((event.keyCode === 75 || event.keyCode == 70) && event.metaKey === true)
                        inputSearch.focus();
                });

                console.log("Disconnecting the observer");
                observer.disconnect();
            }
        });

        var config = {childList: true, subtree: true};
        observer.observe(document.querySelector("body"), config);

    }, false);

    var lastAudioRate = null;
    setInterval(function() {
        var currentRate = window.audioRate || 1;
        var audios = document.getElementsByTagName('audio');
        if (audios.length > 0) {
            for (var i = 0; i < audios.length; i++) {
                if (audios[i].playbackRate !== currentRate) {
                    audios[i].playbackRate = currentRate;
                }
            }
        }
        if (window.audioRate && window.audioRate !== lastAudioRate) {
            var spans = document.querySelectorAll('.meta-audio *:first-child');
            for (var j = 0; j < spans.length; j++) {
                spans[j].textContent = window.audioRate.toFixed(1) + "x ";
            }
            lastAudioRate = window.audioRate;
        }
    }, 1000);

    var NativeNotification = Notification;
    Notification = function(title, options) {
        try {
            if (typeof remote !== 'undefined' && remote && remote.getGlobal) {
                var cfg = remote.getGlobal("config");
                if (cfg && cfg.currentSettings && cfg.currentSettings.quietMode) {
                    return;
                }
            }
        } catch (e) {}
    	var notification = new NativeNotification(title, options);

    	notification.addEventListener('click', function() {
    		ipcRenderer.send('notificationClick');
    	});

    	return notification;
    }

    Notification.prototype = NativeNotification.prototype;
    Notification.permission = NativeNotification.permission;
    Notification.requestPermission = NativeNotification.requestPermission.bind(Notification);

})();
