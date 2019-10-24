# StyleFire :fire:
> A dead simple tiny JS library to manage themes for your websites and web apps - built for css variables
## Install
Embed as a `script`
```
<script src="https://unpkg.com/@haxzie/stylefire@1.0.7/dist/bundle.js"></script>
```
Or install with NPM
```
npm i @haxzie/stylefire

// importing
import * as styleFire from '@haxzie/stylefire'
```

## Demo
Head over to Codepen to check out how we built a tiny [theme switcher using StyleFire](https://codepen.io/haxzie/pen/vYYLBpa).
## Usage
StyleFire works by applying class names to the HTML document with all your CSS variables wrapped inside it. You can either create the CSS variables using a JSON file or create your CSS class and pass it to StyleFire.
### Applying a global CSS class to your HTML
```
styleFire.apply('classname');
```
By default, StyleFire saves the theme name so that you can restore the style whenever the user comes back to your site. Use, `init()` right after loading styleFire lib in your webpage to pickup last saved theme and apply it.
```
styleFire.init();
```
### Load your CSS file using StyleFire
If you want to separate the style classes, you can host them separately and load using styleFire.
```
styleFire.load('themeName', 'link to your CSS file');
```
```
/* Sample CSS file with CSS variables */

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
styleFire.create('myLightTheme', themeLight).then(theme => {
    theme.apply();
});

// Or if you have the JSON file stored remotely you can load that
styleFire.create('myLightTheme', '/themes/light.json').then(theme => theme.apply());
```
> `styleFire.create()` returns a promise with a theme object which contains a method to apply the theme and the name of the theme
```
{
    name: String,
    apply: Function
}
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
- [ ] Check if the supplied JSON is valid
- [ ] Add tests

## Contributing
Check the issues to start contributing
## License
MIT
