'use strict';

let setup = document.getElementById('form');
let setupOpen = document.getElementById('btn');
let setupClose = document.querySelector('.setup-close');

setupOpen.onClick = function () {
    setup.style.display = "block";
};

setupClose.onClick = function () {
    setup.style.display = "none";
};