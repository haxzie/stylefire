import { apply } from './index';

/**
 * returns nested ARRAY of strings just like the nested JSON data
 * @param {String} css | Initial css string
 * @param {Object} data | valid JSON object 
 * @returns {Array} style 
 */
function convertJSONtoArray(css, data) {
    return Object.keys(data).map(item => {
        const itemData = data[item];
        // check if the item is an object object
        if (typeof itemData === "object") {
            // destructure the object into single key value(string) items
            return convertJSONtoArray(`${css}-${item}`, itemData);
        } else if (typeof itemData === "string") {
            const style = `${css}-${item}: ${itemData}; `
            return style;
        }
    });
}

/**
 * Converts a JSON object to valid stylesheet class with attributes
 * @param {Object} JSONStyleData 
 * @returns {String} StyleSheet
 */
function convertJSONtoCSS(className, JSONStyleData) {
    let cssArray = convertJSONtoArray('', JSONStyleData);
    // Flaten out all the css array values into single items and
    // add an extra hyphen in front of all the attrs to make it valid css variables
    let css = cssArray.flat(Infinity).map(attr => {
        return `-${attr}`;
    }).join('');

    // create the class name and append the attributes
    return `.${className} { ${css} }`;
}

/**
 * Creates the stylesheet and appends it to the head of the document
 * @param {String} name | Name of the style/className 
 * @param {Object||String} JSONStyle | JSON object or Url of the JSON object
 * @returns { Function } apply | Function to apply the created style
 */
export default function create(name, JSONStyle) {
    let cssStyle = '';
    // check if the data is vaid
    if (JSONStyle) {
        // check if the style provided is a url or json
        if (typeof JSONStyle === "object") {
            cssStyle = convertJSONtoCSS(name, JSONStyle);
        } else if (typeof JSONStyle === "string") {
            // do a fetch request
        } else {
            console.log('Invalid JSON data provided');
        }
    } else {
        console.error('invalid json');
    }

    // create a style element in the documet with the css styles
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = name;
    style.innerHTML = cssStyle;
    document.getElementsByTagName('head')[0].appendChild(style);
    console.log(`StyleFire: created ${name} successfully`);

    // return a function that can use to apply the currently created theme
    return {
        apply: () => { apply(name); }
    }
}