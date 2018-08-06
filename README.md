# Pippip v2

## About

Pippip v2 is a revision of the original Pippip Drupal/Wordpress theme, utilising Gulp, Browsersync, ES6 & SASS.

### Provided plugins

Usage notes for each plugin can be found in `assets/js/defaults.js`

-   Matchheight
    -   Equalise element heights
-   BaugetteBox
    -   Image lightbox
-   Choices
    -   Better select elements
-   Flickity
    -   Carousels
-   SmoothScroll
    -   Anchor scroll animation
-   VanillaModal
    -   Custom modal overlays

## Gulp

Pippip v2 is Gulp based. For information on installing Gulp see [https://gulpjs.com/](website)

Also included is [https://browsersync.io/](BrowserSync). This provides synchronised browser testing, allowing the dev to see the local site on multiple devices, with real time updates.

## Setup

Images:

-   Place all provided image assets in `assets/img`
-   If making a svg sprite, place images in `assets/svg`

Fonts:

-   Place all fonts in `/dist/fonts`

From the root pippip folder:

-   Run `npm install`
-   Run `gulp` to start compiling & watching the files

Foundation:

-   Row widths & gutters can be amended at `assets/sass/vendor/foundation/_settings.scss`

## CSS

Pippip v2 is SASS based.

-   `assets/sass/global.scss` contains all imports to generate single `dist/css/style.css`
-   `assets/sass/custom/_style.scss` should contain main site styles
-   `assets/sass/global/*.scss` contain header & footer styles
-   `assets/sass/helpers/_defaults.scss` contains general one size fit all styles
-   `assets/sass/helpers/_icon-template.scss` & `assets/sass/helpers/_icon.scss` are helpers for the Gulp SVG sprite task
-   `assets/sass/modules/*.scss` contain styles for included plugins
-   `assets/sass/setup/_fonts.scss` should contain font info
-   `assets/sass/setup/_mediaq.scss` contains media query breakpoints
-   `assets/sass/setup/_mixins.scss` should hold all SASS mixins
-   `assets/sass/setup/_vars.scss` should hold all SASS variables
-   `assets/sass/vendor/*.scss` contain vendor styles from Foundation, Normalize, Animate.css, IncludeMedia

## JS

Pippip v2 is ES6 based, but gets converted to ES5 on compile

-   `assets/js/defaults.js` contains all the default plugins
-   `assets/js/global.js` is a blank file for global JS

---

#### Todo

-   svg sprite
-   img sprite?
-   this doc
