import "./assets/sass/index.scss";
import "./js/skipLinks";
import "./js/translation";
import "../node_modules/ip-d14-slider/dist/ip-slider/ip-slider.esm";

// Only For Lang Switch Btn Demo
// import "./js/switchLang";

import simpleParallax from 'simple-parallax-js';
var image = document.getElementsByClassName('thumbnail');
var imageUp = document.getElementsByClassName('thumbnail-up');

new simpleParallax(image, {
    orientation: 'down',
    overflow: true,
    transition: 'cubic-bezier(0,0,0,1)'
});

new simpleParallax(imageUp, {
    orientation: 'up',
    overflow: true,
    transition: 'cubic-bezier(0,0,0,1)'
});
