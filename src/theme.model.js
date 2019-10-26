import { apply } from './index';

export default class Theme {
    /**
     * Takes the theme name
     * @param {String} name  
     */
    constructor(name) {
        this.name = name;
    }
    /**
     * Function to apply the theme
     */
    apply() {   
        apply(this.name);
    }

    /**
     * Returns the string representation of the theme
     */
    toString() {
        return this.name;
    }
}