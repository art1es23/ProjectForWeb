'use strict';

window.enableSetup = (function () {
    let setupOpen = document.querySelector('.setup-open');
    let setupWindow = document.querySelector('.setup');
    let setupClose = setupWindow.querySelector('.setup-close');
    let setupSubmit = setupWindow.querySelector('.setup-submit');
    let onSetupClose;

    let closeSetupWindowByEnterKey = function (event) {
        if (window.keydownHandler.isEnterKeyPressed(event)) {
            closeSetupWindow();
        }
    };

    let closeSetupWindowByEscKey = function (event) {
        if (window.keydownHandler.isEscKeyPressed(event)) {
            closeSetupWindow();
        }
    };

    let closeSetupWindow = function () {
        setupClose.setAttribute('aria-pressed', true);
        setupOpen.setAttribute('aria-pressed', false);
        setupWindow.classList.add('hidden');
        document.removeEventListener('keydown', closeSetupWindowByEscKey);
        setupClose.removeEventListener('click', closeSetupWindow);
        setupClose.removeEventListener('keydown', closeSetupWindowByEnterKey);
        setupSubmit.removeEventListener('click', closeSetupWindow);
        setupSubmit.removeEventListener('keydown', closeSetupWindowByEnterKey);

        if (typeof onSetupClose === 'function') {
            onSetupClose();
        }
    };

    let showSetupWindow = function (callback) {
        onSetupClose = callback;
        setupOpen.setAttribute('aria-pressed', true);
        setupClose.setAttribute('aria-pressed', false);
        setupWindow.classList.remove('hidden');
        document.addEventListener('keydown', closeSetupWindowByEscKey);
        setupClose.addEventListener('click', closeSetupWindow);
        setupClose.addEventListener('keydown', closeSetupWindowByEnterKey);
        setupSubmit.addEventListener('click', closeSetupWindow);
        setupSubmit.addEventListener('keydown', closeSetupWindowByEnterKey);
    };

    return showSetupWindow;
})();