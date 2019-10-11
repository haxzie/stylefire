# StyleFire :art::fire:
> A dead simple tiny JS library to manage themes for your websites and web apps - built for css variables
## Install
Embed as a `script`
```
<script src="https://unpkg.com/@haxzie/stylefire@1.0.0/dist/bundle.js"></script>
```
Or install with NPM
```
npm i @haxzie/stylefire

// importing
import * as styleFire from '@haxzie/stylefire'
```


## Usage
StyleFire works by applying class names to the HTML document with all your css variables wrapped inside it. You can either create the CSS variables using a JSON file or create your own CSS class and pass it to StyleFire.
### Applying a global CSS class to your HTML
```
styleFire.apply('classname');
```
By default, StyleFire saves the theme name so that you can restore the stye whenever the user comes back to your site. Use, `init()` right after loading styleFire lib in your webpage to pickup last saved theme and apply it.
```
styleFire.init();
```
### Load your CSS file using StyleFire
If you want to seperate out the style classes, you can host them seperately and load using styleFire.
```
styleFire.load('themeName', 'link to your css file');
```
```
/* Sample css file with css variables */

.my-theme {
    --color-primary: 'white';
    --color-secondary: 'black';
}
```
### Create a StyleSheet with a JSON 
Creating your style classes using JSON helps you to manage your styles easily and dynamically.
```
// Create a json object with all the attributes and values
const themeLight = {
     color: {
        primary: 'white',
        secondary: 'black',
    },
    font: {
        size: {
            small: '0.8em',
            medium: '1em',
            large: '1.6em'
        }
    },
    background: {
        color: '#eeeeee'
    }
}
styleFire.create('myLightTheme', themeLight).apply();
```
This will generate the following CSS and apply it to your website 
```
.myLightTheme {
    --color-primary: white;
    --color-secondary: black;
    --font-size-small: 0.8em;
    --font-size-medium: 1em;
    --font-size-large: 1.6em;
}
```
Or apply your theme any time after creating!
```
styleFire.apply('style name');
```
Then you can use these CSS variables anywhere in your CSS files.
```
h1 {
    color: var(--font-color-primary);
    font-size: var(--font-size-large);
}
```
## Listen to style changes
StyleFire can take a callback and fire it whenever the themes are changed. Register a callback with `onStyleChanged` to get the details of the changed theme.
```
styleFire.onStyleChanged((theme) => {
    // do whatever you want with the theme
    console.log(`Theme changed to ${theme}`);
})
```

## Future upgrades
- [ ] Enable loading of JSON file from URL
- [ ] Check if the supplied JSON is valid

## Contributing
Check the issues to start contributing
## Lisence
MIT