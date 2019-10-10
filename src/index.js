import create from './create';

const THEME_NAME = "style-fire-theme";

/**
 * Initializes the document with any saved theme in the localstorage
 */
function init() {
    const applied_theme = localStorage.getItem(THEME_NAME);
    if (applied_theme) {
        apply(applied_theme);
    }
}

/**
 * Function to Apply an already loaded theme
 * @param {String} theme | Name of a theme that's already loaded
 */
function apply(theme) {
    localStorage.setItem(THEME_NAME, theme);
    document.documentElement.className = theme;

    // check if there is a callback registered, if yes emit the theme name!
    if (window.styleFireCallBack) {
        window.styleFireCallBack(theme);
    }
}

/**
 * Emits events whenever the theme is being changes
 * @param {Function} callback 
 */
function onStyleChanged(callback) {
    window.styleFireCallBack = callback;
}

/**
 * Loads a style from a url and adds it to the head of the document
 * @param {String} id 
 * @param {String} styleUrl 
 */
function load(id, styleUrl) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.href = styleUrl;
    style.id = id;
    document.getElementsByTagName('head')[0].appendChild(style);
}

export { init, apply, load, onStyleChanged, create }

