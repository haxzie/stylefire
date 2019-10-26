import create from './create';
import Theme from './theme.model';

const THEME_NAME = "style-fire-theme";

/**
 * 
 * @param {String} default_theme 
 */
function init(default_theme) {
    if (window && document && localStorage) {
        const applied_theme = localStorage.getItem(THEME_NAME);
        if (applied_theme) {
            apply(applied_theme);
        } else if (default_theme) {
            apply(default_theme);
        }
    }
}

/**
 * Function to Apply an already loaded theme
 * @param {String} theme | Name of a theme that's already loaded
 */
function apply(theme) {
    if (window && document && localStorage) {
        localStorage.setItem(THEME_NAME, theme);
        document.documentElement.className = theme;

        // check if there is a callback registered, if yes emit the theme name!
        if (window.styleFireCallBack) {
            window.styleFireCallBack(theme);
        }
    }
}

/**
 * Function to get currently applied theme
 * Checks the local storage for any currently applied theme,
 * if Not present, checks the documentElement root class and returns it
 */
function getTheme() {
    if (window && document && localStorage) {
        const themeName = localStorage.getItem(THEME_NAME);
        if (themeName) {
            return new Theme(themeName);
        } else {
            const currentClassName = document.documentElement.className;
            if (currentClassName && currentClassName.length > 0) {
                return new Theme(currentClassName);
            }
        }

        return null
    }
}
/**
 * Emits events whenever the theme is being changes
 * @param {Function} callback 
 */
function onStyleChanged(callback) {
    if (window && document) {
        window.styleFireCallBack = callback;
    }
}

/**
 * Loads a style from a url and adds it to the head of the document
 * @param {String} id 
 * @param {String} styleUrl 
 */
function load(id, styleUrl) {
    if (window && document) {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.href = styleUrl;
        style.id = id;
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}

export { init, apply, load, onStyleChanged, create, getTheme }

